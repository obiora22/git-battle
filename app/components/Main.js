import React from 'react';
import {Link} from 'react-router';

var Main = React.createClass({
  render() {
    return (
      <div className="main container jumbotron">
        <ul id="main-nav"role="nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

export default Main;