import React from 'react';
import './App.css';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from "./components/HomeScreen";
import { Overview } from "./components/OverviewScreen";

const App: React.FC = () => {
  return (
    <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={`/`} exact component={Home}/>
          <Route path={`/overview/:name`} component={Overview}/>
          <Redirect path="/" to="/"/>
        </Switch>
    </Router>
  );
}

export default App;
