import React from 'react';
import Styles from '../styles/index';
var Prompt = React.createClass({
  propTypes: {
    route: React.PropTypes.object.isRequired,
    username: React.PropTypes.string.isRequired,
    onSubmitUser: React.PropTypes.func.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired
  },
  componentDidMount() {
    this.textInput.focus();
  },
  render() {
    return (
      <div className="prompt jumbotron text-center" style={Styles.transparentBG}>
          <h3 className="text-center">{this.props.route.header}</h3>
          
            <form onSubmit={this.props.onSubmitUser}>
              <div className="form-group">
                <input type="text" className="form-control" ref={(input) => { this.textInput = input}}
                id="textSearch" placeholder="Github Username" onChange={this.props.onUpdateUser}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success" onClick={this.props.clearInput}>Continue</button>
              </div>
            </form>
            <p>{this.props.username}</p>
      </div>
    );
  }
});

export default Prompt;