import React from 'react';
import Styles from '../styles/index';
import {Link} from 'react-router';
import UserDetails from '../components/UserDetails';
import DeliverUserDetails from '../components/DeliverUserDetails';
import Loading from '../components/Loading';

var PropTypes = React.PropTypes;

var loadingPropmt = <p>LOADING ...</p>;

function puke(obj) {
  return <pre>{JSON.stringify(obj,null,' ')}</pre>;
}

var Battle = React.createClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
  },
  componentDidMount() {
    console.log('Battle Mounted');
  },
  render() {
    var displayBattle =  (
      <div className="jumbotron container">
        <h1 className="text-center">Battle of Commits!</h1>
        <div className="row text-center" id="battle-boxes">
         
          <DeliverUserDetails playersInfo={this.props.playersInfo} />

        </div>
        <div className="text-center button-wrapper">
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-warning" onClick={this.props.onInitiateBattle}>Initiate Battle!</button>
            <Link to="/player_one">
              <button type="button" className="btn btn-success">Reselect Players!</button>
            </Link>          
          </div>
        </div>
      </div>
    );
    return (this.props.isLoading) ?  <Loading speed={800} text="Wait one moment"/> : displayBattle;
  }
});

export default Battle;