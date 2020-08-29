import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './css/App.css';

import Navigation from "./Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/contact"} component={Contact} />
              <Route path={"/location"} component={Location} />
          </Switch>
          <div id='footerDistance'></div>
          <Footer />
          <div id='background'></div>
        </Router>
      </div>
    );
  }
}

export default App;
