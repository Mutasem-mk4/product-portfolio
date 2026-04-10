import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <Badge
        variant="secondary"
        className="mb-6 rounded-full px-3 py-1 text-xs font-medium bg-[#ebf5ff] text-[#0068d6] border-0"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0a72ef] mr-1.5" />
        Available for work
      </Badge>

      <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-semibold leading-[1] tracking-[-0.06em] text-foreground mb-5 max-w-2xl">
        <span className="text-[#0a72ef]">Develop.</span>{' '}
        <span className="text-[#de1d8d]">Preview.</span>{' '}
        <span className="text-[#ff5b4f]">Ship.</span>
      </h1>

      <p className="text-xl text-muted-foreground leading-[1.8] max-w-xl mb-8">
        Full-stack developer building tools that developers actually want to use.
        Clean code, fast iteration, shipped often.
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
    </section>
  );
}
