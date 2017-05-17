import React, { Component } from 'react';
import logo from './../logo.svg';
import '../App.css';
import { Link } from 'react-router';


class Layout extends Component {
  render() {
    const title = "Welcome Travis!";
    return (
      <div className="App">
        <h1>hello world</h1>
        {this.props.children}
        <Link to="archives">archives</Link>
      </div>
    );
  }
}

export default Layout;
