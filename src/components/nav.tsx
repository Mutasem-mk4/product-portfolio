'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Education', href: '#education' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
  { label: 'GitHub', href: 'https://github.com/Mutasem-mk4', external: true },
];

export function Nav() {
  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:kharma.mutasem@gmail.com';
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Mutasem Kharma
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </Link>
          ))}
          <a href="#contact" onClick={handleGetInTouch}>
            <Button size="sm" className="rounded-full">
              Get in Touch
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a href="#contact" onClick={handleGetInTouch}>
                <Button className="w-full mt-4">
                  Get in Touch
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
