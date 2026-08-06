import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/lib/theme-context';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Mutasem Kharma (معتصم خرما) | Security Engineer & Builder',
  description: 'Portfolio of Mutasem Kharma (معتصم خرما) — Offensive Security Engineer & Full-Stack Developer. Expert in eBPF, AI security frameworks, and production systems.',
  keywords: ['معتصم خرما', 'Mutasem Kharma', 'Security Engineer', 'eBPF Specialist', 'Jordan', 'عمان', 'الأردن'],
  openGraph: {
    title: 'Mutasem Kharma (معتصم خرما) | Security Engineer & Builder',
    description: 'Portfolio of Mutasem Kharma (معتصم خرما), focusing on low-level system observation and autonomous security agents.',
    url: 'https://mutasem-portfolio.vercel.app/',
    siteName: 'Mutasem Kharma Portfolio',
    images: [
      {
        url: 'https://mutasem-portfolio.vercel.app/moatasem-khorma.jpg',
        width: 800,
        height: 800,
        alt: 'Mutasem Kharma (معتصم خرما) Official Portrait',
      },
    ],
    locale: 'ar_JO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutasem Kharma (معتصم خرما) | Security Engineer & Builder',
    description: 'Portfolio of Mutasem Kharma (معتصم خرما), focusing on low-level system observation and autonomous security agents.',
    images: ['https://mutasem-portfolio.vercel.app/moatasem-khorma.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://mutasem-portfolio.vercel.app/#person',
        'name': 'Mutasem Kharma',
        'alternateName': ['معتصم خرما', 'Moatasem Khorma', 'معتصم خرمة'],
        'url': 'https://mutasem-portfolio.vercel.app/',
        'image': 'https://mutasem-portfolio.vercel.app/moatasem-khorma.jpg',
        'jobTitle': 'Security Engineer & Full-Stack Developer',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Amman',
          'addressCountry': 'Jordan',
        },
        'sameAs': [
          'https://github.com/Mutasem-mk4',
          'https://twitter.com/mutasem_mk4',
          'https://www.linkedin.com/in/mutasem-kharma/',
        ],
        'description': 'Offensive Security Engineer & Full-Stack Developer specializing in eBPF and autonomous security frameworks.',
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://mutasem-portfolio.vercel.app/#official-photo',
        'name': 'Mutasem Kharma Official Portrait (معتصم خرما)',
        'contentUrl': 'https://mutasem-portfolio.vercel.app/moatasem-khorma.jpg',
        'caption': 'Mutasem Kharma (معتصم خرما) — Security Engineer Official Portrait',
        'author': { '@id': 'https://mutasem-portfolio.vercel.app/#person' },
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://mutasem-portfolio.vercel.app/#crown-prince-photo',
        'name': 'Mutasem Kharma at Crown Prince Foundation (معتصم خرما في مؤسسة ولي العهد)',
        'contentUrl': 'https://mutasem-portfolio.vercel.app/moatasem-khorma-work-crown-prince-foundation.jpg',
        'caption': 'Mutasem Kharma (معتصم خرما) developing security tools at Crown Prince Foundation',
        'author': { '@id': 'https://mutasem-portfolio.vercel.app/#person' },
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://mutasem-portfolio.vercel.app/#zinc-event-photo',
        'name': 'Mutasem Kharma at Zain Innovation Campus ZINC (معتصم خرما في منصة زين للإبداع)',
        'contentUrl': 'https://mutasem-portfolio.vercel.app/moatasem-khorma-zinc-zain-event.jpg',
        'caption': 'Mutasem Kharma (معتصم خرما) at Zain Innovation Campus / Zain Esports',
        'author': { '@id': 'https://mutasem-portfolio.vercel.app/#person' },
      },
    ],
  };

  return (
    <html lang="en" data-theme="vercel" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
