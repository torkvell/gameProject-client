import React, { Component } from "react";
import LobbyContainer from "./lobby/LobbyContainer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <LobbyContainer />
      </div>
    );
  }
}
