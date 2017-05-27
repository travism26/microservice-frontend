import React, { Component } from 'react';
import logo from './../logo.svg';
import '../App.css';
import { Link } from 'react-router';
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer"


class Layout extends Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Layout;
