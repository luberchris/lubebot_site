import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  // initialize our state
  state = {
    counts: [],
    users: [],
    encounters: [],
    intervalIsSet: false
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("/api/getCounts")
      .then(data => data.text())
      .then(text => console.log(text));
    // .then(res => this.setState({ counts: res.data }));

    // fetch("/api/getUsers")
    //   .then(data => data.json())
    //   .then(res => this.setState({ users: res.data }));

    // fetch("/api/getEncounters")
    //   .then(data => data.json())
    //   .then(res => this.setState({ encounters: res.data }));
  };

  render() {
    const { counts, users, encounters } = this.state;
    return (
      <div id="home-main">
        <span />
        <div id="navbar">
          <a href="https://www.twitch.tv/keeelaan" target="_blank">
            Keeelaan
          </a>
          <a href="https://www.twitch.tv/lubesy" target="_blank">
            Lubesy
          </a>
          <a href="https://www.twitch.tv/drewbertdoo" target="_blank">
            DrewbertDoo
          </a>
          <a href="https://www.twitch.tv/sethe_1" target="_blank">
            Sethe_1
          </a>
          <a href="https://www.twitch.tv/lessthandennis" target="_blank">
            LessThanDennis
          </a>
        </div>
        <div class="jumbotron">FAMILY TIME</div>
        <div id="stats">
          <div>
            <h1>Counts:</h1>
            <ul>
              {counts.map(r => {
                return (
                  <li>
                    {r.name}: {r.total}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1>Users:</h1>
            <ul>
              {users.map(r => {
                return (
                  <li>
                    {r.name}, {r.class}: {r.chats}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1>Encounters:</h1>
            <ul>
              {encounters.map(r => {
                console.log(r.name);
                return (
                  <li>
                    {r.player.name}: {r.monster.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
