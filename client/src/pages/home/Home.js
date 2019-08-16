import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./home.css";

class Home extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  // var countDownDate = new Date(datetime).getTime(); //"Jan 5, 2021 15:37:25"

  // // Update the count down every 1 second
  // var x = setInterval(function() {
  //   // Get today's date and time
  //   var now = new Date().getTime();

  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now;

  //   // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Output the result in an element with id="demo"
  //   document.getElementById(dad).innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //   // If the count down is over, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById(dad).innerHTML = "EXPIRED";
  //   }
  // }, 1000);

  render() {
    return (
      <div id="home-page">
        <Navbar />
        <div id="home-team">
          <a className="slide-link" href="/drewbertdoo" id="drewbertdoo">
            DrewbertDoo
          </a>
          <a className="slide-link" href="/keeelaan" id="keeelaan">
            Keeelaan
          </a>
          <a className="slide-link" href="/lubesy" id="lubesy">
            Lubesy
          </a>
        </div>
        <div id="filler" />
        {/* <div className="jumbotron">
          <div id="welcome">
            <h1>WELCOME to TEAM UNOFFICIAL</h1>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
