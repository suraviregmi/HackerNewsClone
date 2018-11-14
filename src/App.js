import React, { Component } from "react";
import Main from "./Main";
import MainTable from "./Table/MainTable";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Main} />
          <Route path="/table" component={MainTable} />
        </div>
      </Router>
    );
  }
}

export default App;
