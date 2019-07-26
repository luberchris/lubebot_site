import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./home.css";

class Home extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  timer(datetimelist, dad) {
    //Set the date we're counting down to
    for (let i = 0; i<(datetimelist.length)-1; i++) {
      var countDownDate = datetimelist[i].split(' ')[0]; //"Jan 5, 2021 15:37:25"
      console.log(countDownDate);
    }

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
  }

  render() {
    return (
      <div id="home-page">
        <Navbar />
        <div className="jumbotron">
          <h1>WELCOME</h1>
          <h2>to</h2>
          <h1>TEAM UNOFFICIAL</h1>
        </div>
        <div className="jumbotron" id="info-jumbotron">
          <h1>INFO</h1>
          <div id="schedules">
            <div className="card">
              <h1>DrewbertDoo</h1>
              <span id="drewbertdoo">
                {this.timer(["0 0f0ds0d0f0 0f0d0sf0 s", "8 f9ds9f99sd"], "drewbertdoo")}
              </span>
            </div>
            <div className="card">
              <h1>Keeelaan</h1>
              <span id="keeelaan">
                {this.timer(["0 0f0ds0d0f0 0f0d0sf0 s", "8 f9ds9f99sd"], "keeelaan")}
              </span>
            </div>
            <div className="card">
              <h1>Lubesy</h1>
              <span id="lubesy">
                {this.timer(["0 0f0ds0d0f0 0f0d0sf0 s", "8 f9ds9f99sd"], "lubesy")}
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
