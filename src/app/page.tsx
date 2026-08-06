import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { WorkflowPipeline } from '@/components/workflow-pipeline';
import { Metrics } from '@/components/metrics';
import { ProjectCard } from '@/components/project-card';
import { TechStack } from '@/components/tech-stack';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <Hero />
      <WorkflowPipeline />
      <Metrics />

      {/* Trust Bar */}
      <section className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <div className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
          Trusted By
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap opacity-40">
          {['Company A', 'Startup B', 'Org C', 'Project D', 'Team E'].map(
            (name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-[-0.04em] text-muted-foreground"
              >
                {name}
              </span>
            )
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="mb-10 text-center md:text-left">
          <div className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-2">
            // media & gallery
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-[-0.05em] mb-2">
            Mutasem Kharma In Action <span className="text-muted-foreground font-normal">(معتصم خرما)</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Engineering security tools, presenting projects, and building in public.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Official Portrait */}
          <figure className="group rounded-2xl overflow-hidden border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <img
                src="/moatasem-khorma-official.jpg"
                alt="معتصم خرما - Mutasem Kharma Official Portrait"
                title="معتصem خرما - Mutasem Kharma Official Portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-2">
                Official Portrait
              </span>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                Mutasem Kharma <span className="text-muted-foreground font-normal">(معتصم خرما)</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Offensive Security Engineer & Full-Stack Developer
              </p>
            </figcaption>
          </figure>

          {/* Crown Prince Foundation */}
          <figure className="group rounded-2xl overflow-hidden border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <img
                src="/moatasem-khorma-work-crown-prince-foundation.jpg"
                alt="معتصم خرما في مؤسسة ولي العهد - Mutasem Kharma at Crown Prince Foundation"
                title="معتصم خرما - Crown Prince Foundation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-2">
                Engineering & Security
              </span>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                Crown Prince Foundation <span className="text-muted-foreground font-normal">(مؤسسة ولي العهد)</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mutasem Kharma (معتصم خرما) engineering low-level eBPF & security tools
              </p>
            </figcaption>
          </figure>

          {/* Zain Innovation Campus */}
          <figure className="group rounded-2xl overflow-hidden border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <img
                src="/moatasem-khorma-zinc-zain-event.jpg"
                alt="معتصم خرما في منصة زين للإبداع - Mutasem Kharma at Zain Innovation Campus (ZINC)"
                title="معتصم خرما - Zain Innovation Campus"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-2">
                Tech Events & Community
              </span>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                Zain Innovation Campus <span className="text-muted-foreground font-normal">(ZINC)</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mutasem Kharma (معتصم خرما) with tech community colleagues at Zain Esports / ZINC
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <h2 className="text-[clamp(2rem,5vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.06em] mb-3">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground leading-[1.8]">
            Things I&apos;ve built, from open-source tools to production applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-32">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <TechStack />

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            © 2025 Your Name
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Mutasem-mk4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:you@email.com"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
