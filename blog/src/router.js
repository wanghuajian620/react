import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/BasicLayout';
import ReaLayout from './routes/React';
import Reactnative from './routes/ReactNative';
import Angular from './routes/Angular';
import JavaScript from './routes/JavaScript';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/react" component={ReaLayout} />
        <Route path="/reactnative" component={Reactnative} />
        <Route path="/angular" component={Angular} />
        <Route path="/javascript" component={JavaScript} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
