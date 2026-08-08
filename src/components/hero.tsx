import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-8">
        <div className="flex-1">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full px-3 py-1 text-xs font-medium bg-[#ebf5ff] text-[#0068d6] border-0"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0a72ef] mr-1.5" />
            Computer Engineering Senior @ BAU • Open-Source Builder
          </Badge>

          <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-foreground mb-4">
            Mutasem Kharma
          </h1>

          <p className="text-xl text-muted-foreground leading-[1.8] max-w-2xl mb-8">
            Computer engineering student who builds practical technical tools — open-source cybersecurity software recognized in <span className="text-foreground font-medium">BlackArch Linux</span> and <span className="text-foreground font-medium">Awesome Go</span>, AI-driven security engines, and multi-agent systems.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="/Mutasem_Kharma_CV.docx" download="Mutasem_Kharma_CV.docx">
              <Button size="lg" className="rounded-lg gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </Button>
            </a>

            <a href="#projects">
              <Button variant="outline" size="lg" className="rounded-lg gap-2">
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

            <a
              href="https://github.com/Mutasem-mk4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="rounded-lg gap-2">
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

            <a
              href="https://www.linkedin.com/in/mutasem-kharma-668499289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="rounded-lg gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </Button>
            </a>
          </div>
        </div>

        {/* Profile Avatar Image */}
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-2xl">
            <img
              src="/moatasem-khorma.jpg"
              alt="Mutasem Kharma — Official Portrait"
              title="Mutasem Kharma"
              className="w-full h-full object-cover rounded-full border-4 border-background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
