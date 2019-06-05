import React, { Component, Link } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./page.css";

class Page extends Component {
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
      <div id="page-page">
        <Navbar page={this.state.user} />
        <div className="jumbotron">
          <h1>{this.state.user}</h1>
        </div>
        <div className="page-section">
          <a href={`/dads/${this.state.user}/info/charity`} className="link">
            CHARITY
          </a>
          <a href={`/dads/${this.state.user}/info/about`} className="link">
            ABOUT
          </a>
          <a href={`/dads/${this.state.user}/info/setup`} className="link">
            SETUP
          </a>
          <a href={`/dads/${this.state.user}/info/donate`} className="link">
            DONATE
          </a>
          <a href={`/dads/${this.state.user}/info/rules`} className="link">
            RULES
          </a>
          <a href={`/dads/${this.state.user}/info/social`} className="link">
            SOCIAL
          </a>
          <a href={`/dads/${this.state.user}/info/faq`} className="link">
            FAQ
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Page;
