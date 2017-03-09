import React from 'react';
import Battle from '../components/Battle';
import githubHelpers from '../utils/githubHelpers';
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
    var userNames = this.props.location.query;
    // console.log(userNames);
    // console.log(this.props);
    githubHelpers.getPlayersInfo(Object.values(userNames)).then((response) => {
      console.log(response);
      this.setState({
        isLoading: false,
        playersInfo: response
      })
    })
   
  },
  
  onInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },
  render() {
    return (
      <Battle 
        isLoading={this.state.isLoading} 
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.onInitiateBattle}/>
    );
  }
})

export default BattleContainer;