import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/BasicLayout';
import Bar from './layouts/Menu';
import About from './layouts/About';
import Press from './layouts/Press';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/menu" component={Bar} />
        <Route path="/about" component={About} />
        <Route path="/press" component={Press} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
