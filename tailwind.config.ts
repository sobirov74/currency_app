module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        mainGray: "#EFF2F7",
        primary: "#1e90ff",
        hoverColor: "rgb(242, 242, 242)",
        green: "#198754",
      },
      boxShadow: {
        // selected: "0px 4px 4px 0px #00000040",
        selected: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};
