/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages//*.{ts,tsx}",
    "./components//*.{ts,tsx}",
    "./app//*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "system-white": "#FCFCFD",
        "system-black": "rgba(16, 24, 40, 1)",
        "primary-main": "rgba(var(--primary-main))",
        "foreground-primary": "rgba(var(--foreground-primary))",
        "outline-default": "rgba(var(--outline-default))",
        "outline-primary": "rgba(var(--outline-primary))",
      },
    },
  },
};
