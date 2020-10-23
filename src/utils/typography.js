import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.45,
//   headerFontFamily: ["Rozha One", "serif"],
//   bodyFontFamily: ["Open Sans", "sans-serif"]
// });
const typography = new Typography(kirkhamTheme);

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
