import React, { Component } from "react";
import { connect } from "react-redux";
import { createLobby } from "../../store/lobby/actions";

class LobbyContainer extends Component {
  state = {
    room: ""
  };

  handleClick = event => {
    this.setState({
      room: event.target.value
    });
    console.log("THE ROOM VALS:", this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState;
    this.props.createLobby(this.state, this.props.user.token);
  };

  render() {
    return (
      <div>
        <h4>The form</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            ROOM
            <input
              type="text"
              placeholder="Room to enter"
              name="room"
              value={this.state.room}
              onChange={this.handleClick}
            ></input>
          </label>
          <button type="submit">ENTER</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("THE REDUX STATE IN LOBBYCOMP", reduxState);

  return {
    user: reduxState.user
  };
}

export default connect(mapStateToProps, { createLobby })(LobbyContainer);
