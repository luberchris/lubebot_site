import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./page.scss";

let axios = require("axios");
let cheerio = require("cheerio");

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user: ""
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({ user: params.user });

    // embed Twitch player
    const script = document.createElement("script");
    script.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
    document.body.appendChild(script);

    //web scraper for specific page
    axios
      .get(`https://api.twitter.com/1.1/search/tweets.json`)
      .then(res => {
        console.log(`twitch.tv axios response: \n` + res.data);
      })
      .catch(err => {
        if (err) {
          console.log("componentDidMount fault: \n" + err);
        }
      });
    // axios.request("https://twitter.com").then((error, response, html) => {
    //   if (!error && response.statusCode === 200) {
    //     console.log(html);
    //   }
    // });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-page">
        <Navbar page={this.state.user} />
        <div id="watch-me">
          <iframe
            id="stream-view"
            title="stream_view"
            src={`https://player.twitch.tv/?channel=${this.state.user}`}
            height="540"
            width="960"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          />
          {/* <iframe
            title="chat"
            frameBorder="0"
            scrolling="no"
            id="chat_embed"
            src={`https://www.twitch.tv/embed/${this.state.user}/chat`}
            height="540"
            width="350"
          /> */}
        </div>

        {/* Pull assigned pages for each person */}
        <div className="page-section" id="user-info-links">
          <a href={`/dads/${this.state.user}/charity`} className="link">
            Charity
          </a>
          <a href={`/dads/${this.state.user}/about`} className="link">
            About
          </a>
          <a href={`/dads/${this.state.user}/setup`} className="link">
            Setup
          </a>
          <a href={`/dads/${this.state.user}/donate`} className="link">
            Donate
          </a>
          <a href={`/dads/${this.state.user}/rules`} className="link">
            Rules
          </a>
          <a href={`/dads/${this.state.user}/social`} className="link">
            Social
          </a>
          <a href={`/dads/${this.state.user}/faq`} className="link">
            FAQ
          </a>
        </div>

        <Footer />
      </div>
    );
  }
}

// Page.defaultProps = {
//   targetID: "twitch-embed",
//   width: "1000",
//   height: "400"
// };

export default Page;
