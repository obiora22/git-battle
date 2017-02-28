import React from 'react';
import Styles from '../styles/index';

var Battle = React.createClass({
  render() {
    var displayBattle =  (
      <div className="jumbotron container">
        <h1 className="text-center">Battle of Commits!</h1>
        <div className="row text-center" id="battle-boxes">
          <div className="col-md-5">
            <h3>Player One</h3>
          </div>
          <div className="col-md-5 col-md-offset-2">
            <h3>Player Two</h3>
          </div>
        </div>
      </div>
    );
    var loadingPropmt = <p className="text-center">LOADING ...</p>;
    return this.props.isLoading ?  loadingPropmt : displayBattle
  }
});

export default Battle;