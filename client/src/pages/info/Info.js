import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      info: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.setState({ info: params.info, user: params.user });
  }

  componentWillUnmount() {}

  renderSwitch(param) {
    switch (param) {
      case "about":
        break;
      case "charity":
        break;
      case "donate":
        break;
      case "faq":
        break;
      case "rules":
        break;
      case "setup":
        break;
      case "social":
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="page-page">
        <Navbar page={this.state.user} />

        <div className="page-section">
          This is where our {this.state.info} information goes
        </div>
        <Footer />
      </div>
    );
  }
}

export default Info;
