// app/javascript/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    console.log('app being mounted');
    return (
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello_world">Hello World</Link>
          </li>
          <li>
            <Link to="/bye_world">Bye World</Link>
          </li>
        </ul>
        <hr />
        </div>
        <Routes />
      </Router>
    );
  }
}
