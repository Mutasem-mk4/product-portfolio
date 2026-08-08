export function Education() {
  const list = [
    {
      degree: 'BSc in Computer Engineering',
      institution: 'Al-Balqa Applied University (BAU)',
      period: 'Expected 2027',
      status: '4th Year Senior Student',
      details:
        'Focusing on low-level systems, cybersecurity, and AI engineering. Senior Capstone Project: Design & Architecture of Autonomous Multi-Agent AI Systems.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      degree: 'Intensive Algorithmic Bootcamp (Piscine)',
      institution: '42 Amman',
      period: 'Aug 2026',
      status: 'Completed',
      details:
        'Completed the rigorous "Piscine" phase — hands-on peer-to-peer C programming, memory management, and high-intensity algorithmic problem solving.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <div className="mb-10 text-center md:text-left">
        <div className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-2">
          // academic background
        </div>
        <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-[-0.05em] mb-2">
          Education & Training
        </h2>
        <p className="text-muted-foreground text-lg">
          Formal engineering degree and competitive programming bootcamps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {list.map((item) => (
          <div
            key={item.institution}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border border-border">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.degree}
                  </h3>
                  <div className="text-xs text-muted-foreground font-medium">
                    {item.institution}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
