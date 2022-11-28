module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        teal: {
          350: "#2ce6ce",
        },
        blue: {
          350: "rgb(20 101 110)",
          450: "#124247",
          150: "#2ce6ce",
          550: "#757575",
          650: "#1b828e",
          750: "#0d4d54",
        },
        },
        slate: {
          150: "rgb(124 170 177)",
        
        },
      spacing: {
        100: "40rem",
        98: "33rem",
        158: "58rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
