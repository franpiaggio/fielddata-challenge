/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1976d2',
          blue: '#0095ff',
        },
        neutral: {
          dark: '#364152',
          medium: '#697586',
          light: '#e3e8ef',
          bg: '#eef2f6',
        },
        pending: {
          bg: '#fef6e7',
          text: '#ad8a00',
        },
        completed: {
          bg: '#e8f5e9',
          text: '#00802a',
        },
        taskType: {
          estructura: {
            bg: 'rgb(0 149 255 / 0.16)',
            border: '#0095ff',
            text: '#0095ff',
          },
          agricultura: {
            bg: 'rgb(0 128 42 / 0.16)',
            border: '#00802a',
            text: '#00802a',
          },
          sanidad: {
            bg: 'rgb(138 56 245 / 0.15)',
            border: '#8a38f5',
            text: '#8a38f5',
          },
          ganaderia: {
            bg: 'rgb(127 68 0 / 0.15)',
            border: '#7f4400',
            text: '#7f4400',
          },
          finanzas: {
            bg: 'rgb(0 119 173 / 0.15)',
            border: '#0077ad',
            text: '#0077ad',
          },
        },
        date: {
          today: '#d44a00',
          default: '#364152',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        table: '0 2px 2px 0 rgb(0 0 0 / 0.25)',
      },
      width: {
        'table-checkbox': '190px',
        'table-task': '540px',
        'table-date': '170px',
        'table-responsible': '141px',
      },
    },
  },
  plugins: [],
}
