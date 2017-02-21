const React = require('react');
const ReactDOM = require('react-dom');
const About = require('./About');
const Contact = require('./Contact');

class Parent extends React.Component {
    render() {
      var friends = ['Mike','Delotta','Layla'];
      return (
        <div className="main">
          <h1>Friends</h1>
          <Child friends={friends}/>
        </div>
        ); 
    }
}

var Child = React.createClass({
  
  render(){
    var friendsList = this.props.friends.map(function(friend) {
      return <li>{friend}</li>
    })
    return (
      <ul>
        {friendsList}
      </ul>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
