import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
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
        <h1>{this.state.user}</h1>
        <Navbar />
        <div className="jumbotron">
          <h1>WELCOME</h1>
        </div>
        <p>test</p>
      </div>
    );
  }
}

export default Page;
