import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AppCSS from '../app.css';
import Navigation from './Navigation';

var Main = React.createClass({
  render() {
    return (
      <div className="main container jumbotron">
        <Navigation />
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={900}
          transitionLeaveTimeout={900}
        >
         
          {React.cloneElement(this.props.children,{key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Main;