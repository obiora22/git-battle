import React from 'react';
import {Link} from 'react-router';
function Navigation(props) {
  return (
    <ul id="main-nav"role="nav">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );
  
}

export default Navigation;