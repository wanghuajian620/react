import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/BasicLayout';
import Bar from './layouts/Menu';
import About from './layouts/About';
import Press from './layouts/Press';
import Career from './layouts/Career';
import Faq from './routes/FAQ';
import Story from './routes/Stories';
import Shop from './routes/Shop';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/menu" component={Bar} />
        <Route path="/about" component={About} />
        <Route path="/press" component={Press} />
        <Route path="/career" component={Career} />
        <Route path="/faq" component={Faq} />
        <Route path="/story" component={Story} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
