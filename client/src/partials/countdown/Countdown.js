import React, { Component } from "react";
import "./countdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Countdown extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  timer(datetimelist, dad) {
    //Set the date we're counting down to
    for (let i = 0; i < datetimelist.length - 1; i++) {
      var countDownDate = datetimelist[i].split(" ")[0]; //"Jan 5, 2021 15:37:25"
      console.log(countDownDate);
    }
  }

  render() {
    return (
      <div className="card">
        <h1>Keeelaan</h1>
        <span id="keeelaan">
          {this.timer(["0 0f0ds0d0f0 0f0d0sf0 s", "8 f9ds9f99sd"], "keeelaan")}
        </span>
      </div>
    );
  }
}

export default Countdown;
