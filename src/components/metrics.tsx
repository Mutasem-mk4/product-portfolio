const metrics = [
  { value: '12', unit: '+', label: 'Projects Shipped' },
  { value: '3', unit: 'yr', label: 'Building for the Web' },
  { value: '8', unit: 'k', label: 'GitHub Stars' },
];

export function Metrics() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-lg overflow-hidden">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="p-10 text-center bg-background relative"
          >
            {i < metrics.length - 1 && (
              <div className="hidden md:block absolute right-0 top-[20%] h-[60%] w-px bg-gray-100" />
            )}
            <div className="text-5xl font-semibold tracking-[-0.04em] text-foreground mb-1">
              {m.value}
              <span className="text-2xl font-semibold">{m.unit}</span>
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
