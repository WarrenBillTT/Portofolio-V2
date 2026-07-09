export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-10 py-6"
         style={{ mixBlendMode: 'difference' }}>
      <div className="flex items-center gap-2 text-[11px] tracking-[.2em] uppercase font-medium"
           style={{ color: 'var(--white)' }}>
        <span className="w-[6px] h-[6px] rounded-full bg-accent inline-block" />
        Warren
        <span className="opacity-30 mx-1">/</span>
        <span className="opacity-40 text-[10px] font-light">dev</span>
      </div>
      <div className="flex gap-10">
        {['Projects', 'Background', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[11px] tracking-[.15em] uppercase no-underline opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--white)' }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
