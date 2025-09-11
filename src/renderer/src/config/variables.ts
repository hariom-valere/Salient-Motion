export const APP_NAME = 'Salient Motion'

export const COLORS = {
  backgroundPrimary: '#0f1714',
  backgroundOverlay: 'rgba(0,0,0,0.60)',

  borderSubtle: '#23332c',

  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.80)',
  textMuted: 'rgba(255,255,255,0.60)',

  emerald600: '#059669',
  emerald700: '#047857',
  emerald900_40: 'rgba(6,78,59,0.40)'
}

export const RADII = {
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
  modal: '1.5rem'
}

export const SHADOWS = {
  softEmerald: '0 10px 25px rgba(6,95,70,0.20)'
}

export const Z_INDEX = {
  overlay: 50,
  modal: 60
}

export const TIMINGS = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms'
}

export const ROUTES = {
  login: '/',
  setPassword: '/confirm-password',
  resetPassword: '/forgot-password',
  dashboard: '/dashboard'
}

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
