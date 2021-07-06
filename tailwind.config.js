module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "blue-md": "#1D4176",
        facebook: "#40649D",
        google: "#D95140",
        "cream-light": "#f7f6f4",
        "cream-md": "#ece8d9",
        "cream-pastel": "#F2F1ED",
        "blue-light": "#edf6fd",
        "blue-md": "#506683",
        "blue-dark": "#384a62",
        "blue-sky": "#1da1f2",
        "brown-light": "#cbcac8",
        "brown-dark": "#AFA19C",
        "red-light": "#d77f81",
        "red-md": "#DB5759",
        "green-dark": "#4a945a",
        "gray-light": "#ebeceb",
        "gray-md": "#b0b8c2",
        "gray-dark": "#708095",
        "gray-bord": "#E8E8E8",
        "gray-sub": "#73869E",
        "modal-gray": "#ced5dd",
        "pale-brown": "#FFFEFA",
        "pastel-brown": "#FCFBF9",
        "modal-cream": "#FBF9F4",
        "modal-white": "#FFFFFF",
        "light-gray": "#DDDDDD",
        "sent": "#353535",
        "light": "#f5f5f5",
        "light-green": "#DDEEDF",
        "dark-green": "#219653"
      },
      textColor: theme => theme('colors'),
      textColor: {
        "dark-gray": "#282828",
        "light-gray":"#434343",
        "lighter-gray": "#8F8F8F",
        "primary": "#1B1A1A"
      },
      screens: {
        md: "800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
