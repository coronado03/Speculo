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
        "primary-main": "rgba(var(--primary-main))",
        "system-white": "#FCFCFD",
        "system-black": "rgba(16, 24, 40, 1)",
		"foreground-primary": "rgba(21, 112, 239, 1)",
      },
    },
  },
};
