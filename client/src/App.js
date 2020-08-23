import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './css/App.css';

import Navigation from "./Navigation";
import Home from "./components/Home";
import About from "./components/About";

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
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
