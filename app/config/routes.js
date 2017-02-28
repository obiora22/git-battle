import React from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

var Main = require('../components/Main').default;
var Home = require('../components/Home').default;
var Contact = require('../components/Contact').default;
import PromptContainer from '../containers/PromptContainer';
import BattleContainer from '../containers/BattleContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/player_one" header="Player One"component={PromptContainer}/>
      <Route path="/player_two/:player_one" header="Player Two" component={PromptContainer}/>
      <Route path="/home" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/battle" component={BattleContainer}/>
    </Route>
  </Router>
);


export default routes;