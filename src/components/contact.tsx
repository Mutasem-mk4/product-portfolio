'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'kharma.mutasem@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/mutasem-kharma-668499289/';

  const handleSendEmail = () => {
    // Try opening mailto and fallback to Gmail web compose
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="max-w-xl">
          <div className="font-mono text-xs font-medium uppercase tracking-widest text-primary mb-2">
            // get in touch
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
            Let&apos;s build something together
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Interested in security tooling, eBPF research, multi-agent AI systems, or full-stack collaboration? Feel free to reach out directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Button
            size="lg"
            className="rounded-lg gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleSendEmail}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send Email
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-lg gap-2"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied Email!
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy Email
              </>
            )}
          </Button>

          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-lg gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
