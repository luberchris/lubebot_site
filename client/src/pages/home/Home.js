import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./home.css";

class Home extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="home-page">
        <Navbar />
        <div className="jumbotron">
          <h1>WELCOME</h1>
          <h2>to</h2>
          <h1>TEAM UNOFFICIAL</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
