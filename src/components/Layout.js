import React, { Component } from 'react';
import logo from './../logo.svg';
import '../App.css';

import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      name: "Username" };
  }

  changeTitle(title){
    this.setState({title});
  }

  getVal(){
    return "pass in a function"
  }

  render() {
    var funct = this.getVal();
    // setTimeout(() => {
    //   this.setState({name: "bob"})
    // }, 1000)
    // setTimeout(() => {
    //   this.setState({title: "Welcome Trav"})
    // }, 2000);
    const title = "Welcome Travis!";
    return (
      <div className="App">
        {this.state.name}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
