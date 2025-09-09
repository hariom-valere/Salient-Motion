// Centralized design and app variables
// Import from this file instead of hardcoding values across components.

export const APP_NAME = 'Salient Motion'

// Color tokens (match Tailwind choices used in the project)
export const COLORS = {
  // Backgrounds
  backgroundPrimary: '#0f1714',
  backgroundOverlay: 'rgba(0,0,0,0.60)',
  // Borders
  borderSubtle: '#23332c',
  // Text
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.80)',
  textMuted: 'rgba(255,255,255,0.60)',
  // Brand / Accents
  emerald600: '#059669',
  emerald700: '#047857',
  emerald900_40: 'rgba(6,78,59,0.40)'
}

// Radii
export const RADII = {
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
  modal: '1.5rem' // 24px (rounded-3xl equivalent)
}

// Shadows
export const SHADOWS = {
  softEmerald: '0 10px 25px rgba(6,95,70,0.20)' // shadow-emerald-900/20
}

// Z-index scale for overlays
export const Z_INDEX = {
  overlay: 50,
  modal: 60
}

// Timings
export const TIMINGS = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms'
}

// Route names (single source of truth)
export const ROUTES = {
  login: '/login',
  setPassword: '/set-password',
  resetPassword: '/reset-password',
  dashboard: '/dashboard'
}

// App-wide constants
export const CONSTANTS = {
  passwordMinLength: 6
}

export type Variables = {
  APP_NAME: string
  COLORS: typeof COLORS
  RADII: typeof RADII
  SHADOWS: typeof SHADOWS
  Z_INDEX: typeof Z_INDEX
  TIMINGS: typeof TIMINGS
  ROUTES: typeof ROUTES
  CONSTANTS: typeof CONSTANTS
}

export const VARIABLES: Variables = {
  APP_NAME,
  COLORS,
  RADII,
  SHADOWS,
  Z_INDEX,
  TIMINGS,
  ROUTES,
  CONSTANTS
}
