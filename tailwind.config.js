/** @type {import('tailwindcss').Config} */
export const content = ['./apps/frontend/src/**/*.{js,jsx,ts,tsx}','./apps/frontend/public/index.html'];
export const theme = {
  extend: {
    colors: {
    primary: '#4f46e5',
    secondary: '#f9fafb',
  },
  fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
  }
},
};
export const plugins = [];

