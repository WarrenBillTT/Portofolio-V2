const LINKS = [
  { label: '✉ Email Me',    href: 'mailto:warren@email.com', primary: true  },
  { label: '⌥ GitHub',      href: 'https://github.com',      primary: false },
  { label: 'in LinkedIn',   href: 'https://linkedin.com',    primary: false },
  { label: '↓ Resume PDF',  href: '#',                       primary: false },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 text-center" style={{ background:'var(--white)', color:'var(--black)' }}>
      <div className="reveal">
        <div className="text-[10px] tracking-[.25em] uppercase mb-6"
             style={{ color:'rgba(5,5,5,.4)', fontFamily:'DM Mono,monospace' }}>
          Get In Touch
        </div>
        <h2 className="mb-10" style={{ fontFamily:'"Playfair Display",serif',
             fontSize:'clamp(2.5rem,5vw,4rem)', fontWeight:700, color:'var(--black)' }}>
          Open to Opportunities
        </h2>
        <div className="flex justify-center flex-wrap gap-3 max-w-[500px] mx-auto">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}
               className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] text-[11px] tracking-[.07em] uppercase no-underline transition-all"
               style={l.primary
                 ? { background:'var(--black)', color:'var(--white)', border:'1px solid var(--black)' }
                 : { background:'transparent', color:'rgba(5,5,5,.65)', border:'1px solid rgba(5,5,5,.12)' }}
               onMouseEnter={e => {
                 if (!l.primary) {
                   e.currentTarget.style.background = 'var(--black)'
                   e.currentTarget.style.color = 'var(--white)'
                   e.currentTarget.style.borderColor = 'var(--black)'
                 }
               }}
               onMouseLeave={e => {
                 if (!l.primary) {
                   e.currentTarget.style.background = 'transparent'
                   e.currentTarget.style.color = 'rgba(5,5,5,.65)'
                   e.currentTarget.style.borderColor = 'rgba(5,5,5,.12)'
                 }
               }}>
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-[11px] tracking-[.08em] uppercase"
           style={{ color:'rgba(5,5,5,.35)', fontFamily:'DM Mono,monospace' }}>
          Currently accepting internship &amp; part-time roles — 2026
        </p>
      </div>
    </section>
  )
}
