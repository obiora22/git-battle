const React = require('react');
const ReactDOM = require('react-dom');
import {Router,Route, hashHistory, Link} from 'react-router';
import About from './About';
import Contact from './Contact';

class Home extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
       <h1>Home Page</h1>
       <ul role="nav">
         <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
         <li><Link to="/contact" activeStyle={{color: 'red'}}>Contact</Link></li>
       </ul>
       {this.props.children}
      </div>
      );
  }   
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>),
  document.getElementById('app')
);