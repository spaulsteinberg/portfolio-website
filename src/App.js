import './App.css';
import React, { Component } from 'react';
import Root from './components/Root'
import Home from './components/Body/Home';
import About from './components/Body/About';
import Resume from './components/Body/Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/Body/NotFound';

class App extends Component {

  render(){
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Root>
      </Router>
    )
  }
}

export default App;
