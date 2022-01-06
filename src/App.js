import './App.css';
import React, { Component } from 'react';
import Root from './components/Root';
import About from './components/Body/About/About';
import Experience from './components/Body/Experience/Experience';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/Body/NotFound';
import Portfolio from './components/Body/Portfolio';
import { ProjectPaths } from './constants/ProjectPaths'
import GitHubProject from './components/Body/ProjectInfo/GitHubProject';
import PortfolioProject from './components/Body/ProjectInfo/PortfolioProject';
import StockTraceProject from './components/Body/ProjectInfo/StockTraceProject';
import AnimationProject from './components/Body/ProjectInfo/AnimationProject';
import RestAdminProject from './components/Body/ProjectInfo/RestAdminProject';

class App extends Component {

  renderDynamicProjectPaths = (path) => {
    let pathToMatch = `/${path}`
    switch(pathToMatch) {
      case ProjectPaths.GITHUB:
        return <GitHubProject />
      case ProjectPaths.PORTFOLIO:
        return <PortfolioProject />
      case ProjectPaths.STOCK:
        return <StockTraceProject />
      case ProjectPaths.ANIMATIONS:
        return <AnimationProject />
      case ProjectPaths.REST_ADMIN:
        return <RestAdminProject />
      default:
        return <NotFound />
    }
  }

  render(){
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path="/">
              <Portfolio />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            <Route path="/projects/:project" render={renderProps => this.renderDynamicProjectPaths(renderProps.match.params.project)} />
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
