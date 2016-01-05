import React from "react";
import {Router, Route, IndexRoute} from 'react-router';

import App from './App';
import About from './About';
import Main from './Main';
import Test from './Test';
import LandingPage from './LandingPage';

module.exports = (
	<Router>
		<Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="main" component={Main} />
      <Route path="about" component={About} />
    </Route>
		<Route path="/test" component={Test} />
	</Router>
);
