import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import actions from "./actions";
import Home from "./Home";
import CacheData from "./CacheData";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

console.log(actions);

function About() {
  return <div>About page</div>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cache" component={CacheData} />
      </Router>
    );
  }
}

export default App;
