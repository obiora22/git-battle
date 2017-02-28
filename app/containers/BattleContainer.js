import React from 'react';
import Battle from '../components/Battle';

var BattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    var playersInfo = this.props.location.query;
    // Fetch players info from Github ...
  },
  render() {
    return (
      <Battle 
        isLoading={this.state.isLoading} 
        playersInfo={this.state.playersInfo}
      />
    );
  }
})

export default BattleContainer;