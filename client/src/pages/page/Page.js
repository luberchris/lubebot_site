import React, { Component, Link } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./page.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.setState({ user: params.user });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-page">
        <Navbar page={this.state.user} />
        <div className="jumbotron">
          <h1>{this.state.user}</h1>
        </div>
        {/* Pull assigned pages for each person */}
        <div className="page-section">
          <a href={`/dads/${this.state.user}/charity`} className="link">
            Charity
          </a>
          <a href={`/dads/${this.state.user}/about`} className="link">
            About
          </a>
          <a href={`/dads/${this.state.user}/setup`} className="link">
            Setup
          </a>
          <a href={`/dads/${this.state.user}/donate`} className="link">
            Donate
          </a>
          <a href={`/dads/${this.state.user}/rules`} className="link">
            Rules
          </a>
          <a href={`/dads/${this.state.user}/social`} className="link">
            Social
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

export default Page;
