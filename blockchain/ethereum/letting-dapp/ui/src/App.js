import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalTheme } from "./styles/theme.js";
import { GlobalFonts } from "./styles/Fonts.js";
import Welcome from "./pages/Welcome.js";
import Authentication from "./pages/Authentication.js";
import Dashboard from "./pages/Dashboard.js";

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/Authentication/Tenant">
            <Authentication accountType={"Tenant"} />
          </Route>
          <Route path="/Authentication/Landlord">
            <Authentication accountType={"Landlord"} />
          </Route>
          <Route path="/Authentication/LettingAgency">
            <Authentication accountType={"LettingAgency"} />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
