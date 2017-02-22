import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Home from './components/Home';
import Contact from './components/Contact';
import Routes from './config/routes';

const MOCK_DATA = {
  profileLink: 'https://github.com/',
  userName: 'obiora22',
  imageUrl:"https://avatars2.githubusercontent.com/u/8620832?v=3&amp;s=460"
}

var Link = React.createClass({
  changeUrl() {
    window.location.replace(this.props.href);
  },
  render() {
    return (
      <span style={{color: 'red', cursor: 'pointer'}} onClick={this.changeUrl}>
        {this.props.children}
      </span>
    );

  }
})
var GetProfileImage = React.createClass({
  render() {
    return <img  src={this.props.imageUrl} />;
  }  
})

var GetProfileLink = React.createClass({
  render() {
    return (
      <div>
        <Link href={this.props.profileLink + this.props.userName}>{this.props.userName}</Link>
      </div>
    );
  }
})

var Avatar = React.createClass({
  render() {
    return (
      <div className="bio" >
        <GetProfileImage imageUrl={this.props.imageUrl}/>
        <GetProfileLink profileLink={this.props.profileLink} userName={this.props.userName}/>
      </div>
    );
  }
})

// ReactDOM.render(
//   <Avatar imageUrl={MOCK_DATA.imageUrl} profileLink={MOCK_DATA.profileLink} userName={MOCK_DATA.userName}/>,
//   document.getElementById('app')
// );

// ReactDOM.render(
//   <Main />,
//   document.getElementById('app')
// )

ReactDOM.render(
  Routes,
  document.getElementById('app')
);