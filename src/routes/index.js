import React from 'react';
import { Router, Route } from 'react-router';

import Home from '../pages/Home';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';

const Routes = (props)=>(
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default Routes;
