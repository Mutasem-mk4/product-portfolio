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
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Project Aurora',
    description:
      'Real-time collaboration tool with live cursors, comments, and conflict-free version history for distributed teams.',
    tags: ['TypeScript', 'React', 'WebSocket', 'Redis'],
    status: 'Active',
    href: '#',
    stars: '2.4k',
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
    title: 'DevDash',
    description:
      'Developer dashboard aggregating GitHub, CI/CD, and monitoring into a single view with customizable widgets.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    status: 'Active',
    href: '#',
    stars: '1.1k',
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
    title: 'APIForge',
    description:
      'Open-source API testing framework with declarative syntax, automatic test generation, and CI/CD integration.',
    tags: ['Go', 'gRPC', 'YAML', 'Actions'],
    status: 'Shipped',
    href: '#',
    stars: '3.2k',
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
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Mesh Network',
    description:
      'Decentralized messaging protocol with peer-to-peer connections, end-to-end encryption, and zero-knowledge proofs.',
    tags: ['Rust', 'WebRTC', 'Libp2p', 'WASM'],
    status: 'Shipped',
    href: '#',
    stars: '890',
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
    title: 'PackageKit',
    description:
      'Universal package manager CLI with workspace management, auto versioning, changelogs, and monorepo support.',
    tags: ['Node.js', 'CLI', 'Monorepo', 'Turborepo'],
    status: 'Active',
    href: '#',
    stars: '560',
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
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'DesignTokens',
    description:
      'Design token platform syncing Figma, CSS, and code with version control, diff previews, and team collaboration.',
    tags: ['Python', 'FastAPI', 'React', 'Figma API'],
    status: 'Shipped',
    href: '#',
    stars: '420',
  },
];
