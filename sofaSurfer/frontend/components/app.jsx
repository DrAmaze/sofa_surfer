import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard_container';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path='/signup' component={Splash} />
      <AuthRoute path='/login' component={Splash} />
      <ProtectedRoute path='/dashboard' component={Dashboard} />
    </Switch>
  </div>
);

export default App;
