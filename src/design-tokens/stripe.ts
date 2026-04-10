/**
 * Design Tokens — Stripe Theme
 * Premium fintech: purple gradients, weight-300 elegance, blue-tinted shadows
 */
export const designTokens = {
  colors: {
    background: '#ffffff',
    foreground: '#061b31',
    muted: '#f6f9fc',
    mutedForeground: '#64748d',
    border: '#e5edf5',
    card: '#ffffff',
    cardForeground: '#061b31',
    primary: '#533afd',
    primaryForeground: '#ffffff',
    secondary: '#f6f9fc',
    secondaryForeground: '#061b31',
    accent: '#533afd',
    accentForeground: '#ffffff',
    destructive: '#ea2261',
    destructiveForeground: '#ffffff',
    // Stripe signature colors
    navy: '#061b31',
    navyDark: '#0d253d',
    brandDark: '#1c1e54',
    purple: '#533afd',
    purpleHover: '#4434d4',
    purpleLight: '#b9b9f9',
    ruby: '#ea2261',
    magenta: '#f96bee',
    magentaLight: '#ffd7ef',
    lemon: '#9b6829',
    success: '#15be53',
    successText: '#108c3d',
    label: '#273951',
    body: '#64748d',
    gray50: '#fafafa',
    gray100: '#e5edf5',
    gray400: '#64748d',
    gray600: '#273951',
    gray900: '#061b31',
  },
  spacing: {
    xs: '1px',
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
    md: '5px',
    lg: '6px',
    xl: '8px',
    '2xl': '12px',
    pill: '9999px',
    circle: '50%',
  },
  typography: {
    fontSans:
      'sohne-var, SF Pro Display, -apple-system, system-ui, sans-serif',
    fontMono:
      'Source Code Pro, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    tracking: {
      display: '-1.4px',
      heading: '-0.64px',
      cardTitle: '-0.22px',
      body: 'normal',
      label: 'normal',
    },
    leading: {
      display: '1.03',
      heading: '1.10',
      body: '1.40',
      bodyRelaxed: '1.60',
    },
  },
  shadows: {
    // Stripe's blue-tinted multi-layer shadows
    border: '0px 0px 0px 1px #e5edf5',
    card: `
      rgba(50,50,93,0.25) 0px 30px 45px -30px,
      rgba(0,0,0,0.1) 0px 18px 36px -18px
    `,
    subtle: 'rgba(23,23,23,0.06) 0px 3px 6px',
    elevated: `
      rgba(50,50,93,0.25) 0px 30px 45px -30px,
      rgba(0,0,0,0.1) 0px 18px 36px -18px
    `,
    ambient: 'rgba(23,23,23,0.08) 0px 15px 35px 0px',
    focus: '2px solid #533afd',
  },
} as const;

export type DesignTokens = typeof designTokens;
