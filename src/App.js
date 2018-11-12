import React, { Component } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;
