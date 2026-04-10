/**
 * Design Tokens — Vercel Theme
 * Production-ready CSS custom properties based on the Vercel design system.
 * Usage: Import in globals.css or apply via className on any element.
 */
export const designTokens = {
  colors: {
    background: '#ffffff',
    foreground: '#171717',
    muted: '#fafafa',
    mutedForeground: '#4d4d4d',
    border: 'rgba(0, 0, 0, 0.08)',
    ring: 'rgba(0, 0, 0, 0.08)',
    card: '#ffffff',
    cardForeground: '#171717',
    popover: '#ffffff',
    popoverForeground: '#171717',
    primary: '#171717',
    primaryForeground: '#ffffff',
    secondary: '#fafafa',
    secondaryForeground: '#171717',
    accent: '#fafafa',
    accentForeground: '#171717',
    destructive: '#ff5b4f',
    destructiveForeground: '#ffffff',
    input: 'rgba(0, 0, 0, 0.08)',
    // Workflow accents (Vercel's Develop → Preview → Ship)
    develop: '#0a72ef',
    preview: '#de1d8d',
    ship: '#ff5b4f',
    // Links and interactive
    link: '#0072f5',
    focus: 'hsla(212, 100%, 48%, 1)',
    // Neutral scale
    gray50: '#fafafa',
    gray100: '#ebebeb',
    gray400: '#808080',
    gray500: '#666666',
    gray600: '#4d4d4d',
    gray900: '#171717',
    black: '#000000',
    white: '#ffffff',
  },
  spacing: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '80px',
  },
  radius: {
    none: '0px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    pill: '9999px',
    circle: '50%',
  },
  typography: {
    fontSans:
      'Geist, -apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontMono:
      'Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    // Letter spacing (Vercel uses negative tracking at display sizes)
    tracking: {
      display: '-2.4px',
      heading: '-1.28px',
      cardTitle: '-0.96px',
      body: 'normal',
      label: '0.6px',
    },
    // Line heights
    leading: {
      display: '1.00',
      heading: '1.20',
      body: '1.50',
      bodyRelaxed: '1.80',
    },
  },
  shadows: {
    // Vercel's signature shadow-as-border
    border: '0px 0px 0px 1px rgba(0, 0, 0, 0.08)',
    card: `
      0px 0px 0px 1px rgba(0,0,0,0.08),
      0px 2px 2px rgba(0,0,0,0.04),
      0px 8px 8px -8px rgba(0,0,0,0.04),
      0px 0px 0px 1px #fafafa
    `,
    subtle: '0px 2px 2px rgba(0, 0, 0, 0.04)',
    elevated: `
      0px 0px 0px 1px rgba(0,0,0,0.08),
      0px 2px 2px rgba(0,0,0,0.04),
      0px 8px 8px -8px rgba(0,0,0,0.04),
      0px 12px 24px -12px rgba(0,0,0,0.06)
    `,
    focus: '2px solid hsla(212, 100%, 48%, 1)',
  },
} as const;

export type DesignTokens = typeof designTokens;
