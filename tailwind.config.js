/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/index.html',
    './src/renderer/src/**/*.{ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // Project theme colors
        background: {
          primary: '#0f1714',
          overlay: 'rgba(0,0,0,0.60)'
        },
        border: {
          subtle: '#23332c'
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255,255,255,0.80)',
          muted: 'rgba(255,255,255,0.60)'
        },
        emerald: {
          600: '#059669',
          700: '#047857'
        }
      },
      borderRadius: {
        modal: '1.5rem'
      },
      boxShadow: {
        'soft-emerald': '0 10px 25px rgba(6,95,70,0.20)'
      },
      zIndex: {
        overlay: '50',
        modal: '60'
      }
    }
  },
  plugins: []
}


