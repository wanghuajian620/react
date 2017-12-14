import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/BasicLayout';
import Bar from './layouts/Menu';
import About from './layouts/About';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/menu" component={Bar} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
