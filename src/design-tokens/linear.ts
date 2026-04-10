/**
 * Design Tokens — Linear Theme
 * Dark-mode precision: near-black canvas, indigo-violet, translucent borders
 */
export const designTokens = {
  colors: {
    background: '#08090a',
    foreground: '#f7f8f8',
    muted: '#191a1b',
    mutedForeground: '#8a8f98',
    border: 'rgba(255, 255, 255, 0.08)',
    card: 'rgba(255, 255, 255, 0.02)',
    cardForeground: '#f7f8f8',
    primary: '#5e6ad2',
    primaryForeground: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.04)',
    secondaryForeground: '#d0d6e0',
    accent: '#7170ff',
    accentForeground: '#ffffff',
    destructive: '#ef4444',
    destructiveForeground: '#f7f8f8',
    // Linear signature colors
    marketingBlack: '#08090a',
    panelDark: '#0f1011',
    level3: '#191a1b',
    surfaceSecondary: '#28282c',
    textPrimary: '#f7f8f8',
    textSecondary: '#d0d6e0',
    textTertiary: '#8a8f98',
    textQuaternary: '#62666d',
    brandIndigo: '#5e6ad2',
    accentViolet: '#7170ff',
    accentHover: '#828fff',
    securityLavender: '#7a7fad',
    green: '#27a644',
    emerald: '#10b981',
    borderSubtle: 'rgba(255, 255, 255, 0.05)',
    borderStandard: 'rgba(255, 255, 255, 0.08)',
    borderPrimary: '#23252a',
    lineTint: '#141516',
    gray900: '#08090a',
  },
  spacing: {
    xs: '1px',
    sm: '4px',
    md: '7px',
    lg: '8px',
    xl: '11px',
    '2xl': '16px',
    '3xl': '24px',
    '4xl': '32px',
    '5xl': '48px',
    '6xl': '80px',
  },
  radius: {
    none: '0px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '22px',
    pill: '9999px',
    circle: '50%',
  },
  typography: {
    fontSans:
      'Inter Variable, SF Pro Display, -apple-system, system-ui, sans-serif',
    fontMono:
      'Berkeley Mono, ui-monospace, SF Mono, Menlo, monospace',
    tracking: {
      display: '-1.584px',
      heading: '-0.704px',
      cardTitle: '-0.24px',
      body: '-0.165px',
      label: 'normal',
    },
    leading: {
      display: '1.00',
      heading: '1.13',
      body: '1.50',
      bodyRelaxed: '1.60',
    },
  },
  shadows: {
    // Linear's luminance-based depth on dark surfaces
    border: '0px 0px 0px 1px rgba(255, 255, 255, 0.08)',
    card: `
      rgba(0,0,0,0.2) 0px 0px 0px 1px
    `,
    subtle: 'rgba(0,0,0,0.03) 0px 1.2px 0px',
    elevated: `
      rgba(0,0,0,0.2) 0px 0px 0px 1px,
      rgba(0,0,0,0.4) 0px 2px 4px
    `,
    dialog: `
      rgba(0,0,0,0) 0px 8px 2px,
      rgba(0,0,0,0.01) 0px 5px 2px,
      rgba(0,0,0,0.04) 0px 3px 2px,
      rgba(0,0,0,0.07) 0px 1px 1px,
      rgba(0,0,0,0.08) 0px 0px 1px
    `,
    focus: '0px 4px 12px rgba(0,0,0,0.1)',
  },
} as const;

export type DesignTokens = typeof designTokens;
