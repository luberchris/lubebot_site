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

    this.setState({ info: params.info, user: params.id });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-page">
        <Navbar page={this.state.user} />
        <div className="page-section">{this.state.info}</div>
        <Footer />
      </div>
    );
  }
}

export default Info;
