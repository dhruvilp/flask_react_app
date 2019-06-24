import React, { Component } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
