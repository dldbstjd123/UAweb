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
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }
  callAPI() {
    fetch("http://localhost:3001/users")
      .then(res => res.text())
      .then(res => this.setState({ message: res }))
      .catch(err => err);
  }
  componentDidMount() {
    this.callAPI();
  }

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
          <Footer />
          <div id='background'></div>
        </Router>
      </div>
    );
  }
}

export default App;
