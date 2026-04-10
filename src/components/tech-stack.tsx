const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Go',
  'Rust',
  'Python',
  'PostgreSQL',
  'Redis',
  'Docker',
  'GraphQL',
  'AWS',
];

export function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-32" id="stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {stack.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 px-4 py-3.5 border border-border rounded-md text-sm font-medium transition-colors hover:bg-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
