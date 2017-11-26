import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard_container';
import SpotIndex from './spot/spot_index_container';


const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <ProtectedRoute path='/dashboard' component={Dashboard} />
      <ProtectedRoute path='/locations' component={SpotIndex} />

    </Switch>
  </div>
);

export default App;
