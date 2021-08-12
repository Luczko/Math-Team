import React from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core";

import SideNav from "./components/SideNav";
import theme from "./services/theme";
import Classes from "./pages/Classes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <SideNav />
        <Classes />
      </div>
    </ThemeProvider>
  );
}

export default App;
