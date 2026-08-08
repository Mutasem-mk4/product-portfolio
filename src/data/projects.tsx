import type { ProjectData } from '@/components/project-card';

export const projects: ProjectData[] = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20" />
        <path d="M7 7h8a4 4 0 0 1 0 8H7z" />
      </svg>
    ),
    title: 'procscope',
    description:
      'Zero-overhead eBPF process tracer for Linux malware triage. Recognized and accepted into official BlackArch Linux repository and curated Awesome Go ecosystem.',
    tags: ['Go', 'eBPF', 'Linux', 'BlackArch', 'Awesome Go'],
    status: 'Shipped',
    href: 'https://github.com/Mutasem-mk4/procscope',
    stars: '2',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'CNE Family Official',
    description:
      'Authoritative platform for BAU Computer & Network Engineering students with track manager, study plans, and real-time academic tracking.',
    tags: ['TypeScript', 'React', 'Vite', 'Supabase', 'Academic'],
    status: 'Shipped',
    href: 'https://github.com/Mutasem-mk4/cne-family-official',
    demoHref: 'https://cne-family-official.vercel.app',
    stars: '1',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'gspy',
    description:
      'Advanced eBPF-driven Digital Forensics & Incident Response (DFIR) framework for live Golang malware analysis and threat hunting.',
    tags: ['Go', 'eBPF', 'DFIR', 'Malware Analysis', 'Linux'],
    status: 'Shipped',
    href: 'https://github.com/Mutasem-mk4/gspy',
    stars: '1',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Vex',
    description:
      'High-performance BOLA & Business Logic vulnerability scanner designed for automated IDOR detection with near-zero false positives.',
    tags: ['Go', 'Security', 'BOLA', 'IDOR', 'Fuzzer'],
    status: 'Shipped',
    href: 'https://github.com/Mutasem-mk4/Vex',
    stars: '1',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Aura Framework',
    description:
      'Sentient, autonomous multi-agent offensive security framework powered by Vertex AI. Hunts, weaponizes, and reports vulnerabilities automatically.',
    tags: ['Python', 'Vertex AI', 'Multi-Agent AI', 'DAST', 'Docker'],
    status: 'Active',
    href: 'https://github.com/Mutasem-mk4/aura-framework',
    stars: '1',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Kharma Sentinel',
    description:
      'Real-time network defense suite with Deep Packet Inspection, MaxMind GeoIP intelligence, VirusTotal EDR scanning, and threat neutralization.',
    tags: ['Python', 'Flask', 'MaxMind', 'VirusTotal', 'Security'],
    status: 'Shipped',
    href: 'https://github.com/Mutasem-mk4/kharma-network-radar',
    stars: '5.4k+',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    title: 'Aegis LLM Firewall',
    description:
      'Zero-Trust LLM Firewall & Enterprise AI Gateway that intercepts GenAI requests, strips PII, and blocks prompt injections in under 40ms.',
    tags: ['Python', 'FastAPI', 'vLLM', 'Presidio', 'AI Security'],
    status: 'Active',
    href: 'https://github.com/Mutasem-mk4/aegis-llm-firewall',
    stars: '1',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Reva Chalets',
    description:
      'Full-stack luxury chalets booking and property rental platform built with Next.js, Prisma ORM, TypeScript, and mobile app integration.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'Vercel'],
    status: 'Shipped',
    href: 'https://github.com/Mutasem-mk4/reva-chalets4',
    stars: '1',
  },
];
