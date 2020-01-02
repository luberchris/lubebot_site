import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./blizz.css";

let blizzFace =
  "https://cdn.discordapp.com/attachments/282309452198313984/662435698795610147/Screenshot_20190718-102110_Discord.jpg";
let sumoFace =
  "https://cdn.discordapp.com/attachments/556364865007255552/661150390586179594/20191230_101515.jpg";

class Blizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      info: ""
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="blizz-page">
        <img
          id="blizz-img"
          src="https://cdn.discordapp.com/attachments/282309452198313984/662435698795610147/Screenshot_20190718-102110_Discord.jpg"
        />

        <p>Peepeepoopoo</p>
      </div>
    );
  }
}

export default Blizz;
