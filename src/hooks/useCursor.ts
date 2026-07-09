import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cx = 0, cy = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      cx = e.clientX; cy = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = cx + 'px'
        dotRef.current.style.top  = cy + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (cx - rx) * 0.1
      ry += (cy - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const addHover = () => dotRef.current?.classList.add('hov')
    const rmHover  = () => dotRef.current?.classList.remove('hov')
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { dotRef, ringRef }
}
