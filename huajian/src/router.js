import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/Basiclayouts';
import UserLayout from './layouts/UserLayout';
import Picture from './layouts/picture';
// import Exception from './components/Exception';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" exact component={UserLayout} />
        <Route path="/" component={BasicLayout} />
        <Route path="/picture" exact component={Picture} />
        {/* <Route path="/a" exact component={Exception} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;

