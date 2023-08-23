/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: "768px",
      lg: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "32px",
        lg: "104px",
      },
    },
    fontSize: {
      sm: ["10px", "16px"],
      base: ["14px", "20px"],
      lg: ["18px", "48px"],
      xl: [
        "40px",
        {
          lineHeight: "56px",
          letterSpacing: "-1.6px",
        },
      ],
    },
  },
  plugins: [],
};
