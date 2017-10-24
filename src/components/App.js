import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Joel's Portfolio</Link></li>
            <li><Link to="/advertising">Advertising</Link></li>
            <li><Link to="/creative">Creative</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>

        </div>
      </Router>
    );
  }
}

export default App;
