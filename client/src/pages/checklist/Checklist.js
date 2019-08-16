import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./checklist.css";

class Checklist extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="checklist-page">
        <Navbar />
        <div>
          <ul>
            <h2>Internet</h2>
            <li>
              <input name="test" type="checkbox" /> Physical/wifi connections
            </li>
            <li>
              <input name="test" type="checkbox" />
              <a
                href="https://www.speedtest.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Speedtest
              </a>
            </li>
            <h2>OBS</h2>
            <li>
              <input name="test" type="checkbox" />
              <a
                href="https://streamlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Live notifications
              </a>
            </li>
            <li>
              <input name="test" type="checkbox" /> Game Source
            </li>
            <li>
              <input name="test" type="checkbox" /> Sound
            </li>
            <li>
              <input name="test" type="checkbox" /> Webcam placement
            </li>
            <li>
              <input name="test" type="checkbox" /> Notification placement
            </li>
            <li>
              <input name="test" type="checkbox" /> Starting, Live, and Ending
              scenes match theme
            </li>
            <h2>Environment</h2>
            <li>
              <input name="test" type="checkbox" /> Background, nothing ToS or
              embarrassing
            </li>
            <li>
              <input name="test" type="checkbox" /> Webcam
            </li>
            <li>
              <input name="test" type="checkbox" /> Chroma key
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Checklist;
