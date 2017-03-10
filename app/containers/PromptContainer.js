import React from 'react';
import Prompt from '../components/Prompt';
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
  clearInput() {
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },
  onSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
   console.info('refs:',this.refs);
    if (this.props.routeParams.player_one) {
    
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
    console.log(this.state)
    return (
       <Prompt 
        route={this.props.route} 
        username={this.state.username} 
        onSubmitUser={this.onSubmitUser} 
        onUpdateUser={this.onUpdateUser}/>
    );
  }
});

export default PromptContainer;