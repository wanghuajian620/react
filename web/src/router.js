import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/User/Login';
import BasicLayout from './layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
