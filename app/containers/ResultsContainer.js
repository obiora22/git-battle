import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';
var ResultsContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount() {
    console.log('Mount',this.props.location.state.playersInfo);
    githubHelpers.battle(this.props.location.state.playersInfo)
    .then((scores) => {
      console.log('SCORES',scores)
      this.setState({
        isLoading: false,
        scores: scores
      })
    })
  },
  render() {
    return (
      <Results 
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    );
  }
});

export default ResultsContainer;