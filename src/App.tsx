import React from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core";

import SideNav from "./components/SideNav";
import theme from "./services/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <SideNav></SideNav>MASZKO
      </div>
    </ThemeProvider>
  );
}

export default App;
