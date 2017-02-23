import React from 'react';
import {Link} from 'react-router';

var Home = React.createClass({
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="text-center">Welcome to Git Battle!</h1>
        <p>Some Fancy Motto</p>
        <Link to="/player_one">
          <button className="btn btn-large btn-success">
            Get started!
          </button>
        </Link>
      </div>
    );
  }
});

export default Home;