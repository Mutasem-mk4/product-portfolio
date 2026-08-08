import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
        <div>
          <Badge
            variant="secondary"
            className="mb-6 rounded-full px-3 py-1 text-xs font-medium bg-[#ebf5ff] text-[#0068d6] border-0"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0a72ef] mr-1.5" />
            Available for work & opportunities
          </Badge>

          <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-foreground mb-4">
            Mutasem Kharma
          </h1>

          <p className="text-xl text-muted-foreground leading-[1.8] max-w-2xl mb-8">
            Offensive Security Engineer & Full-Stack Developer. Specializing in eBPF process tracing, autonomous AI-powered vulnerability engines, and scalable production systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg">
                View Projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Button>
            </a>
            <a href="#gallery">
              <Button variant="outline" size="lg">
                View Gallery & Photos
              </Button>
            </a>
            <a
              href="https://github.com/Mutasem-mk4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Profile Avatar Image */}
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-xl">
            <img
              src="/moatasem-khorma.jpg"
              alt="Mutasem Kharma (معتصم خرما) — Official Portrait"
              title="Mutasem Kharma (معتصم خرما)"
              className="w-full h-full object-cover rounded-full border-2 border-background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
