import React from 'react';
import mathHelper from '../utils/mathHelper';

var PropTypes = React.PropTypes;

var ShowWinner = React.createClass({
  propTypes: {
    scores: PropTypes.array.isRequired,
    playerScore: PropTypes.number.isRequired
  },
  render() {
    var win = <h3 className="text-center">Winner!</h3>;
    var loose = <h3 className="text-center">Looser!</h3>;
    var draw = <h3 className="text-center">Draw!</h3>;
    var player_one_score = this.props.scores[0];
    var player_two_score = this.props.scores[1];
    // var maxScore = mathHelper.findMaxNumber(this.props.scores)
    var maxScore = Math.max(player_one_score, player_two_score);
    if (player_one_score === player_two_score ) {
      return draw
    } 
    return this.props.playerScore <  maxScore ? loose : win;
  }
});


export default ShowWinner;
