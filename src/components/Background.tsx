const SKILLS = [
  { title: 'Frontend',          pills: ['React','Next.js','TypeScript','Tailwind CSS','HTML / CSS'], accent: false },
  { title: 'Backend',           pills: ['Node.js','Express','REST API','GraphQL','Python'],          accent: false },
  { title: 'Database & Cloud',  pills: ['PostgreSQL','MongoDB','Redis','Firebase','Docker','Vercel'],accent: false },
  { title: 'Currently Learning',pills: ['Kubernetes','Go','AWS'],                                   accent: true  },
]

const STATS = [
  { n: '8+',  l: 'Projects shipped'  },
  { n: '2+',  l: 'Years coding'      },
  { n: '3×',  l: 'Hackathon finalist'},
  { n: '4.0', l: 'CS GPA'            },
]

export default function Background() {
  return (
    <section id="background" className="grid min-h-[680px]"
             style={{ background:'var(--black)', gridTemplateColumns:'1fr 1fr 280px',
                      borderTop:'1px solid var(--border)' }}>

      {/* LEFT — bio + stats */}
      <div className="flex flex-col justify-center px-12 py-20 reveal"
           style={{ borderRight:'1px solid var(--border)' }}>
        <div className="text-[10px] tracking-[.25em] uppercase mb-5"
             style={{ color:'var(--accent)', fontFamily:'DM Mono,monospace' }}>
          Background
        </div>
        <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(2rem,3vw,2.8rem)',
                     fontWeight:700, letterSpacing:'-.02em', lineHeight:1.15, marginBottom:'1.75rem' }}>
          Building things that<br/>work <em style={{ fontStyle:'italic', fontWeight:400, color:'var(--accent)' }}>elegantly</em>
        </h2>
        <p className="text-[13.5px] leading-[1.85] font-light mb-3.5" style={{ color:'rgba(248,245,240,.6)' }}>
          I'm a <strong className="font-medium" style={{ color:'var(--white)' }}>Computer Science student</strong> who
          loves building products end-to-end — from database schema design and REST/GraphQL APIs to polished,
          accessible frontends. I care as much about code quality as the final product.
        </p>
        <p className="text-[13.5px] leading-[1.85] font-light" style={{ color:'rgba(248,245,240,.6)' }}>
          My focus is <strong className="font-medium" style={{ color:'var(--white)' }}>full-stack web development</strong>.
          Comfortable owning an entire feature solo: architecture, implementation, testing, deployment.
          Currently seeking <strong className="font-medium" style={{ color:'var(--white)' }}>internship or part-time roles</strong> where
          I can ship real things and grow fast.
        </p>
        <div className="grid grid-cols-2 mt-7" style={{ gap:'1px', background:'var(--border)', border:'1px solid var(--border)' }}>
          {STATS.map(s => (
            <div key={s.l} className="p-5" style={{ background:'var(--black)' }}>
              <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'2rem', fontWeight:700,
                            color:'var(--accent)', lineHeight:1 }}>
                {s.n}
              </div>
              <div className="text-[10px] mt-1 tracking-[.03em]" style={{ color:'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE — skills */}
      <div className="flex flex-col justify-center px-12 py-20 reveal">
        <div className="mb-9">
          <div className="text-[10px] tracking-[.25em] uppercase mb-2"
               style={{ color:'var(--accent)', fontFamily:'DM Mono,monospace' }}>
            Technical Skills
          </div>
          <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.6rem,2.5vw,2.2rem)',
                       fontWeight:700, letterSpacing:'-.02em', lineHeight:1.1 }}>
            What I<br/><em style={{ fontStyle:'italic', fontWeight:400, color:'var(--accent)' }}>work with</em>
          </h3>
        </div>
        {SKILLS.map((sg, i) => (
          <div key={sg.title} className="py-4"
               style={{ borderBottom:'1px solid var(--border)', borderTop: i===0 ? '1px solid var(--border)' : undefined }}>
            <div className="text-[9px] tracking-[.25em] uppercase mb-3"
                 style={{ color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
              {sg.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sg.pills.map(p => (
                <span key={p} className="text-[11px] px-3 py-1 rounded-[3px] transition-all cursor-default"
                      style={sg.accent
                        ? { background:'rgba(200,245,58,.04)', border:'1px solid rgba(200,245,58,.15)', color:'rgba(200,245,58,.45)', fontFamily:'DM Mono,monospace' }
                        : { background:'rgba(248,245,240,.04)', border:'1px solid var(--border)', color:'rgba(248,245,240,.6)', fontFamily:'DM Mono,monospace' }}
                      onMouseEnter={e => {
                        const el = e.currentTarget
                        el.style.background = 'rgba(200,245,58,.07)'
                        el.style.borderColor = 'rgba(200,245,58,.2)'
                        el.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget
                        el.style.background = sg.accent ? 'rgba(200,245,58,.04)' : 'rgba(248,245,240,.04)'
                        el.style.borderColor = sg.accent ? 'rgba(200,245,58,.15)' : 'var(--border)'
                        el.style.color = sg.accent ? 'rgba(200,245,58,.45)' : 'rgba(248,245,240,.6)'
                      }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT — photo placeholder */}
      <div className="relative overflow-hidden reveal" style={{ background:'var(--black)' }}>
        {/* Replace this div with <img src="your-photo.jpg" className="w-full h-full object-cover object-top" /> */}
        <div className="w-full h-full min-h-[680px] flex flex-col items-center justify-center gap-4 px-8 text-center"
             style={{ background:'linear-gradient(175deg,#0f0f20 0%,#0a0a16 55%,#070710 100%)' }}>
          <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'90px', fontWeight:700,
                        fontStyle:'italic', color:'var(--accent)', lineHeight:1, opacity:.15 }}>
            W
          </div>
          <div className="text-[9px] tracking-[.2em] uppercase" style={{ color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
            Add your photo here
          </div>
          <div className="text-[8px] tracking-[.1em]" style={{ color:'rgba(248,245,240,.18)', fontFamily:'DM Mono,monospace' }}>
            Portrait format recommended
          </div>
        </div>
        <div className="absolute bottom-5 left-5 text-[9px] tracking-[.15em] uppercase"
             style={{ color:'var(--muted)', fontFamily:'DM Mono,monospace' }}>
          <span style={{ color:'var(--accent)' }}>Warren</span> · Jakarta
        </div>
      </div>
    </section>
  )
}
