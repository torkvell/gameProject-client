import React, { Component } from "react";
import { connect } from "react-redux";
// import Lobby from "./Lobby";
import { createLobby, getRooms, deleteRoom } from "../../store/lobby/actions";
import CreateRoom from "./CreateRoom";

class LobbyContainer extends Component {
  state = {
    room: ""
  };

  handleClick = event => {
    this.setState({
      room: event.target.value
    });
    // console.log("THE ROOM VALS:", this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState;
    this.props.createLobby(this.state, this.props.user.token);
  };

  deleteRoom = id => {
    this.props.deleteRoom(id);
  };

  render() {
    console.log("THE RENDER STATE:", this.props);
    if (this.props.lobby.gameRooms.length < 1)
      return (
        <div>
          <CreateRoom
            handleSubmit={this.handleSubmit}
            onChange={this.handleClick}
            state={this.state}
          />
          <h2>No rooms found</h2>
        </div>
      );
    return (
      <div>
        <CreateRoom
          handleSubmit={this.handleSubmit}
          onChange={this.handleClick}
          state={this.state}
        />

        {console.log("THE ROOMS FROM STATE:", this.props.lobby.gameRooms)}

        {this.props.lobby.gameRooms.map(room => {
          return (
            <div>
              <h4>{room.room_name}</h4>
              <button>Join!</button>
              <button onClick={() => this.deleteRoom(room.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("THE REDUX STATE IN LOBBYCOMP", reduxState);
  return {
    user: reduxState.user,
    lobby: reduxState.lobby
  };
}

export default connect(mapStateToProps, { createLobby, getRooms, deleteRoom })(
  LobbyContainer
);
