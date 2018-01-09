import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/User/login';
import BasicLayout from './layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
