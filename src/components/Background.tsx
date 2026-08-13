const SKILLS = [
  { title: 'Frontend', pills: ['React', 'Next.js', 'Three.js', 'Tailwind CSS', 'TypeScript', 'HTML / CSS'], accent: false },
  { title: 'Backend', pills: ['Node.js', 'Express', 'REST API', 'Python', 'Prisma'], accent: false },
  { title: 'Database & Cloud', pills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Docker', 'Vercel', 'Stripe'], accent: false },
  { title: 'Currently Learning', pills: ['Kubernetes', 'Go', 'AWS'], accent: true },
]

const STATS = [
  { n: '10+', l: 'Projects shipped' },
  { n: '2+', l: 'Years coding' },
  { n: '2×', l: 'Hackathon' },
  { n: '3.9', l: 'CS GPA' },
]

export default function Background() {
  return (
    <section id="background" className="relative overflow-hidden reveal"
      style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}>

      <div className="relative max-w-[1360px] mx-auto">

        {/* Animated Decorative Element */}
        <div className="absolute pointer-events-none select-none hidden md:flex items-center justify-center"
          style={{ top: '20px', right: '40px', width: '400px', height: '400px', opacity: .7 }}>
          {/* Glowing Orb */}
          <div className="absolute w-[150px] h-[150px] rounded-full blur-[80px]"
            style={{ background: 'var(--accent)', opacity: 0.15 }}></div>
          {/* Rotating Rings */}
          <svg className="absolute w-full h-full animate-[spin_20s_linear_infinite]"
            viewBox="0 0 440 440" fill="none">
            <circle cx="220" cy="220" r="190" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="220" cy="220" r="130" stroke="var(--border)" strokeWidth="1" strokeDasharray="10 10" />
            <circle cx="220" cy="220" r="160" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3" />
          </svg>
          <svg className="absolute w-[300px] h-[300px] animate-[spin_15s_linear_infinite_reverse]"
            viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="100" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 6" />
            <circle cx="150" cy="150" r="140" stroke="var(--border)" strokeWidth="1" strokeDasharray="20 5" />
          </svg>
          {/* Center pulsating dot */}
          <div className="absolute w-3 h-3 rounded-full animate-ping"
            style={{ background: 'var(--accent)', opacity: 0.8 }}></div>
          <div className="absolute w-2 h-2 rounded-full"
            style={{ background: 'var(--accent)' }}></div>
          {/* Crosshairs */}
          <svg className="absolute w-[440px] h-[440px] opacity-30" viewBox="0 0 440 440" fill="none">
            <line x1="220" y1="0" x2="220" y2="440" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 10" />
            <line x1="0" y1="220" x2="440" y2="220" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 10" />
          </svg>
        </div>

        {/* Header - oversized, asymmetric, not boxed into a column */}
        <div className="relative px-8 md:px-14 pt-24 md:pt-28 pb-8 md:pb-10">
          <div className="flex items-center gap-3 mb-6"
            style={{ fontFamily: 'DM Mono,monospace', fontSize: '11px', letterSpacing: '.25em' }}>
            <span style={{ color: 'var(--accent)' }}>( 02 )</span>
            <span className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span style={{ color: 'var(--muted)' }}>BACKGROUND</span>
          </div>
          <h2 className="max-w-[920px]"
            style={{
              fontFamily: '"Playfair Display",serif', fontSize: 'clamp(2.5rem,6vw,5rem)',
              fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.02
            }}>
            Building things that<br />
            work <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>elegantly.</em>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row md:items-start gap-y-12 md:gap-x-16 px-8 md:px-14 pb-24">

          {/* Photo - 4:5 portrait, duotone tint, vertical caption, sticky while the text scrolls past */}
          <div className="w-full max-w-[260px] md:max-w-none md:w-[320px] flex-none relative mx-auto md:mx-0 md:sticky md:top-28">
            <div className="relative w-full mx-auto md:mx-0" style={{ aspectRatio: '4 / 5' }}>
              <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center gap-4 text-center"
                style={{ background: 'linear-gradient(160deg,#12122a 0%,#0a0a16 55%,#050508 100%)' }}>
                <img
                  src="/profile.jpg"
                  alt="Warren"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Hide broken image icon and show placeholder if profile.jpg is not found yet
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.photo-placeholder');
                      if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="photo-placeholder hidden absolute inset-0 flex-col items-center justify-center gap-4 px-8">
                  <div className="absolute inset-0" style={{
                    mixBlendMode: 'overlay',
                    background: 'linear-gradient(205deg, rgba(200,245,58,.22), transparent 55%)'
                  }} />
                  <div style={{
                    fontFamily: '"Playfair Display",serif', fontSize: '74px', fontWeight: 700,
                    fontStyle: 'italic', color: 'var(--accent)', opacity: .14, position: 'relative'
                  }}>
                
                  </div>
                  <div className="relative text-[9px] tracking-[.2em] uppercase" style={{ color: 'var(--muted)', fontFamily: 'DM Mono,monospace' }}>
                    Add profile.jpg to public folder
                  </div>
                  <div className="relative text-[8px] tracking-[.1em]" style={{ color: 'rgba(248,245,240,.18)', fontFamily: 'DM Mono,monospace' }}>
                    4:5 portrait recommended
                  </div>
                </div>
              </div>

              <span className="absolute -top-px -left-px w-3 h-3" style={{ borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)' }} />
              <span className="absolute -bottom-px -right-px w-3 h-3" style={{ borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)' }} />

              <div className="hidden md:flex absolute top-0 -right-8 h-full items-center">
                <span style={{
                  writingMode: 'vertical-rl', fontFamily: 'DM Mono,monospace', fontSize: '9px',
                  letterSpacing: '.22em', color: 'var(--muted)', textTransform: 'uppercase'
                }}>
                  Warren <span style={{ color: 'var(--accent)' }}>·</span> Jakarta <span style={{ color: 'var(--accent)' }}>·</span> 01
                </span>
              </div>
            </div>
          </div>

          {/* Bio + stat ticker + skills list */}
          <div className="flex-1 min-w-0">
            <p className="text-[14.5px] leading-[1.9] font-light mb-9 max-w-[560px]" style={{ color: 'rgba(248,245,240,.62)' }}>
              <span style={{
                fontFamily: '"Playfair Display",serif', fontSize: '3.2rem', fontWeight: 700,
                float: 'left', lineHeight: .78, marginRight: '10px', marginTop: '4px', color: 'var(--accent)'
              }}>
                I
              </span>
              'm a <strong className="font-medium" style={{ color: 'var(--white)' }}>Computer Science student</strong> who
              loves building products end-to-end - from database schema design and REST/GraphQL APIs to polished,
              accessible frontends. I care as much about code quality as the final product. My focus is{' '}
              <strong className="font-medium" style={{ color: 'var(--white)' }}>full-stack web development</strong> and{' '}
              <strong className="font-medium" style={{ color: 'var(--white)' }}>artificial intelligence</strong>, with a specialization in intelligent systems.
              I am comfortable owning an entire feature solo: architecture, implementation, testing, deployment.
              Currently seeking <strong className="font-medium" style={{ color: 'var(--white)' }}>internship or part-time roles</strong> where
              I can ship real things and grow fast.
            </p>

            {/* Stat ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 mb-11 py-8" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              {STATS.map((s) => (
                <div key={s.l} className="flex flex-col">
                  <div style={{ fontFamily: '"Playfair Display",serif', fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div className="text-[9.5px] mt-2 tracking-[.06em] uppercase" style={{ color: 'var(--muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="text-[10px] tracking-[.25em] uppercase mb-1" style={{ color: 'var(--accent)', fontFamily: 'DM Mono,monospace' }}>
              Technical Skills
            </div>

            {/* Skills - flat numbered rows, plain-text tags instead of pill badges */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {SKILLS.map((sg, i) => (
                <div key={sg.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8 py-4"
                  style={{ borderBottom: '1px solid var(--border)' }}>
                  <div className="flex items-baseline gap-3 sm:w-[180px] flex-none">
                    <span style={{ fontFamily: 'DM Mono,monospace', fontSize: '10px', color: sg.accent ? 'var(--accent)' : 'var(--muted)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[12.5px] uppercase tracking-[.06em]"
                      style={{ fontFamily: 'DM Mono,monospace', color: sg.accent ? 'var(--accent)' : 'var(--white)' }}>
                      {sg.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {sg.pills.map(p => (
                      <span key={p} className="text-[12.5px] font-light"
                        style={{ color: sg.accent ? 'rgba(200,245,58,.6)' : 'rgba(248,245,240,.5)' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
