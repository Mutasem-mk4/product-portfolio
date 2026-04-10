'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { designTokens as vercelTokens } from '@/design-tokens/vercel';
import { designTokens as stripeTokens } from '@/design-tokens/stripe';
import { designTokens as linearTokens } from '@/design-tokens/linear';

export type ThemeName = 'vercel' | 'stripe' | 'linear';

const themeMap = {
  vercel: vercelTokens,
  stripe: stripeTokens,
  linear: linearTokens,
} as const;

type ThemeTokens = (typeof themeMap)[ThemeName];

interface ThemeContextValue {
  theme: ThemeName;
  tokens: ThemeTokens;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('vercel');

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next);
    // Apply theme class to document for CSS
    document.documentElement.setAttribute('data-theme', next);
  }, []);

  const tokens = themeMap[theme];

  return (
    <ThemeContext.Provider value={{ theme, tokens, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
