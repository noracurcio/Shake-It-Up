import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shaker from "./pages/shaker";
import Contact from "./pages/contact";
// import Nav from "./components/Nav";
import Enter from "./pages/enter";
import Profile from "./pages/profile";

function App() {
  return (
    <>
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Enter />
          </Route>
          <Route exact path="/shaker">
            <Shaker />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
