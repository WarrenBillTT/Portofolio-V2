import { useEffect, useRef } from 'react'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Projects   from './components/Projects'
import Background from './components/Background'
import Contact    from './components/Contact'
import { useReveal } from './hooks/useReveal'
import './index.css'

/* ── Custom cursor ── */
function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cx = 0, cy = 0, rx = 0, ry = 0, raf: number
    const onMove = (e: MouseEvent) => {
      cx = e.clientX; cy = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = cx + 'px'
        dotRef.current.style.top  = cy + 'px'
      }
    }
    const loop = () => {
      rx += (cx - rx) * 0.1
      ry += (cy - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    const add = () => dotRef.current?.classList.add('hov')
    const rm  = () => dotRef.current?.classList.remove('hov')
    const bindHover = () => {
      document.querySelectorAll('a,button').forEach(el => {
        el.addEventListener('mouseenter', add)
        el.addEventListener('mouseleave', rm)
      })
    }
    bindHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cur" />
      <div ref={ringRef} className="cur-r" />
    </>
  )
}

/* ── Footer ── */
function Footer() {
  useEffect(() => {
    const tick = () => {
      const n = new Date()
      const t = [n.getHours(), n.getMinutes(), n.getSeconds()]
        .map(x => String(x).padStart(2, '0')).join(':')
      const el = document.getElementById('footer-time')
      if (el) el.textContent = t
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer
      className="flex justify-between items-center px-10 py-8"
      style={{
        background:    'var(--black)',
        borderTop:     '1px solid var(--border)',
        fontSize:      '10px',
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        color:         'var(--muted)',
        fontFamily:    'DM Mono, monospace',
      }}
    >
      <span>© 2026 Warren</span>
      <span id="footer-time">—</span>
      <span>Full Stack Developer</span>
    </footer>
  )
}

/* ── Root ── */
export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
