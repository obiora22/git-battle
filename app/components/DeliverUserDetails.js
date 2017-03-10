import React from 'react';
import UserDetails from './UserDetails';

function DeliverUserDetails(props) {
  console.info('DUDetails',props.playersInfo);
  return (
    <div>
      {props.playersInfo.map((playerObject, index) => {
        return (
          <div className="col-md-6" key={index}>
            <h3>Player {index + 1} ({playerObject.login})</h3>
            <UserDetails info={playerObject}/>
          </div>
        );
      })}
    </div>
  );
}

DeliverUserDetails.propTypes = {
  playersInfo: React.PropTypes.array.isRequired
}
export default DeliverUserDetails;