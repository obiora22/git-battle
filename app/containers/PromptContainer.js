import React from 'react';
import Styles from '../styles/index';

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      username: ''
    }
  },

  onUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.player_one) {
      console.log(this.context);
      this.context.router.push({
        pathname: '/battle',
        query: {
          player_one: this.props.routeParams.player_one,
          player_two: username
        }
      })
    } else {
      console.log(this.context);
      this.context.router.push('/player_two/' + username)
    }
  },

  render() {
    console.log(this)
    return (
        <div className="prompt jumbotron text-center" style={Styles.transparentBG}>
          <h3 className="text-center">{this.props.route.header}</h3>
          
            <form onSubmit={this.onSubmitUser}>
              <div className="form-group">
                <input type="text" className="form-control" id="textSearch" placeholder="Github Username" onChange={this.onUpdateUser}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">Continue</button>
              </div>
            </form>
            <p>{this.state.username}</p>
        </div>
    );
  }
});

export default PromptContainer;