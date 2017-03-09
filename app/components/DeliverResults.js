import React from 'react';
import ShowWinner from './ShowWinner';
import UserDetails from './UserDetails';
function DeliverResults(props) {
  return (
    <div>
      {props.playersInfo.map((playerObject, index) => {
        return (
          <div className="col-md-6" key={index}>
            <ShowWinner playerScore={props.scores[index]} scores={props.scores}/>
            <h3>Player {index + 1}</h3>
            <UserDetails info={playerObject}/>
          </div>
        );
      })}
    </div>
  );
}

DeliverResults.propTypes = {
  playersInfo: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
}

export default DeliverResults;