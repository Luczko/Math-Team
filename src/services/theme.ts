import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFEB3B",
    },
    secondary: {
      main: "#7E57C2",
    },
    info: {
      main: "#5A5A5A",
      dark: "#313131",
    },
    text: {
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      fontFamily: "Tachyon",
      fontWeight: 400,
      fontSize: "50px",
      lineHeight: 1,
    },
    h3: {
      fontFamily: "Roboto Mono",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: 1,
    },
  },
});

export default theme;
