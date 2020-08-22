import React, { Component } from 'react';
import logo from './logo.svg';
import {Router, Route} from "react-router-dom"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {message : ""};
  }
  callAPI(){
    fetch("http://localhost:3001/users")
    .then(res => res.text())
    .then(res => this.setState({message: res}))
    .catch(err => err);
  }
  componentDidMount(){
    this.callAPI();
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      {/* <Router>
      <Route path={"home"}/>
      <Route path={"home"}/>
    </Router> */}
    </div>
  );}
}

export default App;
