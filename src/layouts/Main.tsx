import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Classes from "../pages/Classes";
import Offer from "../pages/Offer";
import PriceList from "../pages/PriceList";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Classes />
        </Route>
        <Route path='/oferta'>
          <Classes />
        </Route>
        <Route path='/zajecia'>
          <Offer />
        </Route>
        <Route path='/cennik'>
          <PriceList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
