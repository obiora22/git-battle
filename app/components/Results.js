import React from 'react';
import DeliverResults from './DeliverResults';
import Contact from './Contact';
import Loading from './Loading';
var PropTypes = React.PropTypes;

function displayJSON(obj) {
  return <pre>{JSON.stringify(obj,null,2)}</pre>
}



var Results = React.createClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired
  },
  render() {
    var displayView = (
        <div className="row">
          <h3 className="text-center">The results are in folks!</h3>
          <DeliverResults playersInfo={this.props.playersInfo} scores={this.props.scores}/>
        </div>
);
    console.log(this.props)
    return (
      (this.props.isLoading) ? <Loading /> : displayView
    );
  }
});

export default Results; 