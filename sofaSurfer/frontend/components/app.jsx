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
import SpotShow from './spot/spot_show_container';
import Bookings from './booking/booking_container';
import Profile from './review/review_container';
import Search from './search/search_results_container';
import Footer from './header/footer';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
  <div>
    <Route component={ScrollToTop} />
    <header>
      <HeaderContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <ProtectedRoute path='/dashboard' component={Dashboard} />
      <ProtectedRoute path="/locations/:spotId" component={SpotShow} />
      <ProtectedRoute path='/locations' component={SpotIndex} />
      <ProtectedRoute path='/bookings' component={Bookings} />
      <ProtectedRoute path='/profile' component={Profile} />
      <ProtectedRoute path='/search' component={Search} />

    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
