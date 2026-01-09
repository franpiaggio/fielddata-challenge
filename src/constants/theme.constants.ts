/**
 * Theme constants - Centralized color and styling tokens
 * All colors are synchronized with tailwind.config.js
 */

export const THEME = {
  colors: {
    text: {
      primary: '#364152',
      secondary: '#697586',
      secondaryMuted: 'rgba(105, 117, 134, 0.5)',
    },
    neutral: {
      dark: '#364152',
      medium: '#697586',
      light: '#e3e8ef',
      bg: '#eef2f6',
    },
    date: {
      today: '#d44a00',
      default: '#364152',
    },
    status: {
      pending: {
        bg: '#fff9e3',
        text: '#ad8a00',
      },
      completed: {
        bg: 'rgb(0 128 42 / 0.15)',
        text: '#00802a',
      },
    },
    primary: {
      blue: '#0095ff',
    },
  },
  spacing: {
    table: {
      gap: {
        small: '5px',
        medium: '10px',
      },
      rowHeight: '55px',
      headerHeight: '37px',
      expandedRowHeight: '66px',
    },
  },
} as const;

export const TABLE_COLUMN_WIDTHS = {
  checkbox: '190px',
  task: '540px',
  date: '170px',
  responsible: '175px',
  action: 'auto',
} as const;
