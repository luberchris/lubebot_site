import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./team.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const {
    //   match: { params }
    // } = this.props;
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-team">
        <Navbar />
        <div id="team-section">
          <div className="card" id="drew-card">
            DrewbertDoo
          </div>
          <div className="card" id="keelan-card">
            Keeelaan
          </div>
          <div className="card" id="luber-card">
            Lubesy
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;
