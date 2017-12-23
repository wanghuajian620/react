import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/BasicLayout';
import ReaLayout from './routes/React';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/react" component={ReaLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
