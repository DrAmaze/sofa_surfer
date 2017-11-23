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

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      <GreetingContainer />
    </header>
    <Splash />
  </div>
);

export default App;
