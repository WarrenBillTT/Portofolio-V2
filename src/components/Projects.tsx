import { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  const trackRef  = useRef<HTMLDivElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const stateRef  = useRef({ off: 0, tOff: 0, drag: false, dX: 0, dOff: 0 })

  const CSTEP = 320
  const SET   = PROJECTS.length * CSTEP
  const ALL   = [...PROJECTS, ...PROJECTS, ...PROJECTS]

  useEffect(() => {
    const track = trackRef.current
    const wrap  = wrapRef.current
    if (!track || !wrap) return

    // Center padding
    const pad = (window.innerWidth - 300) / 2
    track.style.paddingLeft  = `${pad}px`
    track.style.paddingRight = `${pad}px`

    const s = stateRef.current
    s.off  = -SET
    s.tOff = -SET

    let raf: number
    const animate = () => {
      if (!s.drag) s.tOff -= 0.5
      s.off += (s.tOff - s.off) * 0.09
      if (s.off > -SET * 0.5) { s.off -= SET; s.tOff -= SET }
      if (s.off < -SET * 1.5) { s.off += SET; s.tOff += SET }
      track.style.transform = `translateX(${s.off}px)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onDown = (e: MouseEvent) => {
      s.drag = true; s.dX = e.clientX; s.dOff = s.tOff
      wrap.style.cursor = 'grabbing'; e.preventDefault()
    }
    const onMove = (e: MouseEvent) => {
      if (!s.drag) return
      s.tOff = s.dOff + (e.clientX - s.dX)
    }
    const onUp = () => {
      if (!s.drag) return
      s.drag = false; wrap.style.cursor = 'grab'
      s.tOff = Math.round(s.tOff / CSTEP) * CSTEP
    }
    const onTStart = (e: TouchEvent) => { s.drag=true; s.dX=e.touches[0].clientX; s.dOff=s.tOff }
    const onTMove  = (e: TouchEvent) => { if(!s.drag)return; s.tOff=s.dOff+(e.touches[0].clientX-s.dX) }
    const onTEnd   = () => { s.drag=false; s.tOff=Math.round(s.tOff/CSTEP)*CSTEP }

    wrap.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    wrap.addEventListener('touchstart', onTStart, { passive: true })
    wrap.addEventListener('touchmove',  onTMove,  { passive: true })
    wrap.addEventListener('touchend',   onTEnd)

    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [SET, CSTEP])

  return (
    <section id="projects" className="overflow-hidden py-20" style={{ background:'#0a0a0a' }}>
      <div className="flex justify-between items-end px-10 mb-14 reveal">
        <div>
          <div className="text-[10px] tracking-[.25em] uppercase mb-1.5" style={{ color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
            Featured Work
          </div>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.6rem,3vw,2.4rem)',
                       fontWeight:700, color:'var(--white)', letterSpacing:'-.02em' }}>
            Projects I've Built
          </h2>
        </div>
        <p className="text-[12px] font-light text-right max-w-[240px] leading-[1.75]"
           style={{ color:'var(--muted)' }}>
          Drag to explore — loops continuously.
        </p>
      </div>

      <div ref={wrapRef} className="overflow-hidden py-5 pb-10" style={{ cursor:'grab', userSelect:'none' }}>
        <div ref={trackRef} className="cards-track">
          {ALL.map((p, i) => <ProjectCard key={`${p.name}-${i}`} project={p} />)}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6 reveal"
           style={{ fontSize:'10px', letterSpacing:'.2em', textTransform:'uppercase', color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
        <span className="w-10 h-px" style={{ background:'var(--border)', display:'inline-block' }} />
        ← Drag to explore →
        <span className="w-10 h-px" style={{ background:'var(--border)', display:'inline-block' }} />
      </div>
    </section>
  )
}
