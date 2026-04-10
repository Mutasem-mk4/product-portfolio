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

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6">
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
