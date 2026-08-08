export function Highlights() {
  const items = [
    {
      badge: '1st Place Winner',
      badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      title: 'Microsoft Hackathon Champion',
      desc: 'Engineered and pitched a winning technical solution under time pressure, competing against peer engineering teams.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
    {
      badge: 'Open-Source Honor',
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      title: 'BlackArch Linux & Awesome Go',
      desc: 'Security and tracing tools accepted into official BlackArch Linux repository and the curated Awesome Go ecosystem list.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      badge: 'Community Leadership',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      title: 'Youth Mentor & Technical Trainer',
      desc: 'Thinking Oasis (Little Innovators Lab 2025) youth mentor teaching critical thinking, algorithms, and project building.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section id="highlights" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <div className="mb-10 text-center md:text-left">
        <div className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-2">
          // key achievements
        </div>
        <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-[-0.05em] mb-2">
          Highlights & Recognitions
        </h2>
        <p className="text-muted-foreground text-lg">
          Competitive hackathon victories, distro contributions, and mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border">
                {item.icon}
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase border ${item.badgeColor}`}
              >
                {item.badge}
              </span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
