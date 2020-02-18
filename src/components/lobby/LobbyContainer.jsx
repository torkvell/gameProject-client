import React, { Component } from "react";
import { connect } from "react-redux";
// import Lobby from "./Lobby";
import {
  createLobby,
  deleteRoom,
  thunkHandleJoin
} from "../../store/lobby/actions";
import CreateRoomForm from "./CreateRoomForm";

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

  handleJoin = (gameId, userId) => {
    console.log("THE GAME AND USER IDS:", gameId, userId);
    this.props.thunkHandleJoin(gameId, userId);
  };
  render() {
    if (this.props.lobby.gameRooms.length < 1)
      return (
        <div>
          <CreateRoomForm
            handleSubmit={this.handleSubmit}
            onChange={this.handleClick}
            state={this.state}
          />
          <h2>No rooms found</h2>
        </div>
      );
    return (
      <div>
        <CreateRoomForm
          handleSubmit={this.handleSubmit}
          onChange={this.handleClick}
          state={this.state}
        />

        {this.props.lobby.gameRooms.map(room => {
          return (
            <div>
              <h4>{room.room_name}</h4>
              <button
                onClick={() => {
                  this.handleJoin(room.id, this.props.user.id);
                  this.props.history.push("/gametable");
                }}
              >
                Join!
              </button>
              <button onClick={() => this.deleteRoom(room.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    lobby: reduxState.lobby
  };
}

export default connect(mapStateToProps, {
  thunkHandleJoin,
  createLobby,
  deleteRoom
})(LobbyContainer);
