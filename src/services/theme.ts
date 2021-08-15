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
      primary: "#5A5A5A",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "poster-gothic-round-atf, sans-serif",
      fontWeight: 300,
      fontSize: "2.2vw",
      lineHeight: "90px",
    },
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
    h4: {
      fontFamily: "poster-gothic-round-atf, sans-serif",
      fontWeight: 300,
      fontSize: "1.2vw",
      lineHeight: 1,
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 300,
      fontSize: "23px",
      lineHeight: 1.8,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 300,
      fontSize: "25px",
      lineHeight: "40px",
      letterSpacing: "0.00938em",
    },
  },
});

export default theme;
