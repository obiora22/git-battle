import React from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

var Main = require('../components/Main').default;
var Home = require('../components/Home').default;
var Contact = require('../components/Contact').default;

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
);


export default routes;