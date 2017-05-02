import React, { Component } from 'react';
import logo from './../logo.svg';
import '../App.css';

import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {
  constructor() {
    super();
    this.name="Travis Martin"
  }

  getVal(){
    return "pass in a function"
  }

  render() {
    var funct = this.getVal();
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is a paragraph tag</p>
        <h2> {this.name}</h2>
        <Footer />
      </div>
    );
  }
}

export default Layout;
