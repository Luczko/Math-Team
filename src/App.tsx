import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { ThemeProvider } from "@material-ui/core";

import SideNav from "./components/SideNav";
import theme from "./services/theme";
import Main from "./layouts/Main";
import Classes from "./pages/Classes";
import PriceList from "./pages/PriceList";
import Offer from "./pages/Offer";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <SideNav>
            <Switch>
              <Route exact path='/'>
                <Classes />
              </Route>
              <Route path='/zajecia'>
                <Offer />
              </Route>
              <Route path='/oferta'>
                <Classes />
              </Route>
              <Route path='/cennik'>
                <PriceList />
              </Route>
              <Route path='/omnie'>
                <About />
              </Route>
            </Switch>
          </SideNav>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
