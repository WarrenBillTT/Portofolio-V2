import type { Project } from '../data/projects'

interface Props { project: Project }

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex-none w-[300px] rounded-[6px] overflow-hidden relative group"
         style={{ background:'#0f0f0f', border:'1px solid var(--border)',
                  transition:'transform .4s cubic-bezier(.34,1.56,.64,1),border-color .3s,box-shadow .3s' }}
         onMouseEnter={e => {
           const el = e.currentTarget as HTMLDivElement
           el.style.transform = 'translateY(-8px)'
           el.style.borderColor = 'rgba(200,245,58,.25)'
           el.style.boxShadow = '0 20px 40px rgba(0,0,0,.5)'
         }}
         onMouseLeave={e => {
           const el = e.currentTarget as HTMLDivElement
           el.style.transform = ''
           el.style.borderColor = ''
           el.style.boxShadow = ''
         }}>

      {/* Thumbnail */}
      <div className="w-full h-[168px] overflow-hidden"
           style={{ background:'#0d0d0d' }}>
        <div className="w-full h-full flex flex-col items-center justify-center gap-1.5">
          <div className="text-[28px] opacity-35">{project.icon}</div>
          <div className="text-[10px] tracking-[.15em] uppercase" style={{ color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
            {project.name}
          </div>
        </div>
      </div>

      {/* Badge */}
      <span className="absolute top-2.5 right-2.5 text-[9px] tracking-[.1em] uppercase px-2 py-0.5 rounded-[3px]"
            style={project.status === 'live'
              ? { background:'rgba(200,245,58,.1)', border:'1px solid rgba(200,245,58,.25)', color:'var(--accent)', fontFamily:'DM Mono,monospace' }
              : { background:'rgba(248,245,240,.05)', border:'1px solid var(--border)', color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
        {project.status === 'live' ? '● Live' : '◐ WIP'}
      </span>

      {/* Body */}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.map(s => (
            <span key={s} className="text-[10px] px-2 py-0.5 rounded-[3px]"
                  style={{ background:'rgba(200,245,58,.06)', border:'1px solid rgba(200,245,58,.14)',
                           color:'rgba(200,245,58,.65)', fontFamily:'DM Mono,monospace' }}>
              {s}
            </span>
          ))}
        </div>
        <div className="text-[15px] font-bold mb-1.5 tracking-[-0.01em]"
             style={{ fontFamily:'"Playfair Display",serif', color:'var(--white)' }}>
          {project.name}
        </div>
        <div className="text-[12.5px] leading-[1.65] font-light" style={{ color:'var(--muted)' }}>
          {project.desc}
        </div>
        <div className="flex gap-3 mt-3.5 pt-3.5" style={{ borderTop:'1px solid var(--border)' }}>
          {[['⌥ GitHub ↗', project.github], ['Live Demo ↗', project.demo]].map(([label, href]) => (
            <a key={label} href={href}
               className="text-[11px] tracking-[.04em] no-underline transition-colors"
               style={{ color:'var(--muted)', fontFamily:'DM Mono,monospace' }}
               onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
               onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
