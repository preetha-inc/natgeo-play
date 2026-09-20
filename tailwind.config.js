/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        expedition: {
          night: "#0E1512",   // deep expedition-night background (green-black, not pure black)
          panel: "#131C18",   // slightly lifted panel bg
          line: "#24322C",    // hairline borders on dark
        },
        ng: {
          yellow: "#FFC72C",  // National Geographic signature yellow
          "yellow-deep": "#E8A317",
          forest: "#1B4332",  // deep field-guide green
          ice: "#9DC8E8",     // polar accent
          cream: "#F2EEE2",   // field-journal paper
          rust: "#B5502F",    // specimen-stamp red-clay (used sparingly)
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        topo: "radial-gradient(circle at 20% 20%, rgba(255,199,44,0.06), transparent 40%), radial-gradient(circle at 80% 0%, rgba(157,200,232,0.08), transparent 35%), radial-gradient(circle at 50% 100%, rgba(27,67,50,0.35), transparent 45%)",
      },
    },
  },
  plugins: [],
};
