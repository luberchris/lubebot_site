import React, { Component } from "react";
import "./animation.scss";

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      animation: "",
      picture: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.setState({ animation: params.animation });
    // this.setState({ picture: window.location.href.rsplit("/", 1)[-1] });

    // console.log(this.state.picture);
    console.log(params.animation);
  }

  componentWillUnmount() {}

  renderSwitch(param) {
    switch (param) {
      case "testing":
        return <div id="testing-box" />;
      case "other-testing":
        return <div>testing</div>;
      case "picture":
        let pictureStyle = {
          backgroundImage: `url(${this.state.picture})`
        };
        return <div style={pictureStyle} />;
      case "underwater":
        return (
          <div className="waves">
            <div className="wave wave_1" />
            <div className="wave wave_2" />
            <div className="wave wave_3" />
            <div className="wave wave_4" />
            <div className="wave wave_5" />
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div id="animation-page">
        <div className={this.state.animation}>
          {this.renderSwitch(this.state.animation)}
        </div>
      </div>
    );
  }
}

export default Animation;
