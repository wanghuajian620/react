import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/Basiclayouts';
import UserLayout from './layouts/UserLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" exact component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

