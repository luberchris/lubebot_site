import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  // initialize our state
  state = {
    counts: [],
    users: [],
    encounters: []
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {}

  getDataFromDb = () => {
    fetch("/api/getCounts")
      .then(data => data.json())
      .then(res => this.setState({ counts: res.data }));

    fetch("/api/getUsers")
      .then(data => data.json())
      .then(res => this.setState({ users: res.data }));

    fetch("/api/getEncounters")
      .then(data => data.json())
      .then(res => this.setState({ encounters: res.data }));
  };

  render() {
    const { counts, users, encounters } = this.state;
    return (
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

        <h1>Users:</h1>
        <ul>
          {users.map(r => {
            return (
              <li>
                {r.name}: {r.chats}
              </li>
            );
          })}
        </ul>
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
    );
  }
}

export default Home;
