const steps = [
  {
    label: '01 — Develop',
    color: '#0a72ef',
    title: 'Build fast',
    desc: 'Clean architecture with modern frameworks. TypeScript, Go, Rust — the right tool for the job.',
  },
  {
    label: '02 — Preview',
    color: '#de1d8d',
    title: 'Test everything',
    desc: 'Automated testing, CI/CD pipelines, and staging environments that catch bugs before users do.',
  },
  {
    label: '03 — Ship',
    color: '#ff5b4f',
    title: 'Deploy daily',
    desc: 'Production is the best testing environment. Ship small, ship often, iterate based on real feedback.',
  },
];

export function WorkflowPipeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-lg overflow-hidden">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="p-8 bg-background relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-[20%] h-[60%] w-px bg-gray-100" />
            )}
            <div
              className="font-mono text-xs font-medium uppercase tracking-widest mb-2"
              style={{ color: step.color }}
            >
              {step.label}
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] mb-2">
              {step.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
