import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./team.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.setState({ user: params.id });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-team">
        <Navbar page={this.state.user} />
        <div className="jumbotron">
          <h1>{this.state.user}</h1>
        </div>
        <div className="page-section">
          <a href={`/dads/${this.state.user}/charity`} className="link">
            CHARITY
          </a>
          <a href={`/dads/${this.state.user}/about`} className="link">
            ABOUT
          </a>
          <a href={`/dads/${this.state.user}/setup`} className="link">
            SETUP
          </a>
          <a href={`/dads/${this.state.user}/donate`} className="link">
            DONATE
          </a>
          <a href={`/dads/${this.state.user}/rules`} className="link">
            RULES
          </a>
          <a href={`/dads/${this.state.user}/social`} className="link">
            SOCIAL
          </a>
          <a href={`/dads/${this.state.user}/faq`} className="link">
            FAQ
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;
