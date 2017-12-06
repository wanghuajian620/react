import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layouts/Basiclayouts';
import UserLayout from './layouts/UserLayout';
import Picture from './layouts/picture';
// import User from './components/Users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" exact component={UserLayout} />
        <Route path="/" exact component={BasicLayout} />
        <Route path="/picture" exact component={Picture} />
        {/* <Route path="/user" exact component={User} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
// // .src/router.js
// import React from 'react';
// import { Router, Route } from 'dva/router';
// import Users from './routes/Users';

// export default function ({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/users" component={Users} />
//     </Router>
//   );
// }

