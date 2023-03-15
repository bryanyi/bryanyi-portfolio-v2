/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        accent: "var(--accent-color)",
        primaryBg: "var(--primary-bg-color)",
        nav: "var(--Nav)",
        project: "var(--project)",
        projectDesc: "var(--project-desc)",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
        fontSans: ["Calibre", "Inter", "San Francisco", "SF Pro Text"],
      },
      boxShadow: {
        squish: "3px 3px 0 1px var(--primary-color)",
        squished: "0 0 0 0 var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
