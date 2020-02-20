import React, { Component } from "react";
import { connect } from "react-redux";
import LobbyTable from "./LobbyTable";
import {
  createLobby,
  deleteRoom,
  thunkHandleJoin
} from "../../store/lobby/actions";
import Container from "@material-ui/core/Container";

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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // this.setState;
  //   this.props.createLobby(this.state, this.props.user.token);
  // };
  createGame = (gameName, userToken) => {
    this.props.createLobby(gameName, userToken);
  };

  deleteRoom = id => {
    this.props.deleteRoom(id);
  };

  handleJoin = (gameId, userId) => {
    console.log("game id and user id: ", gameId, userId);
    this.props.history.push(`/gametable?gameId=${gameId}`);
    this.props.thunkHandleJoin(gameId, userId);
  };

  render() {
    console.log("State redux: ", this.props.state);
    // if (this.props.lobby.gameRooms.length < 1) return <h2>No rooms found</h2>;
    return (
      <div>
        <Container>
          {/* <CreateRoomForm
            handleSubmit={this.handleSubmit}
            onChange={this.handleClick}
            state={this.state}
          /> */}
          <LobbyTable
            props={this.props}
            deleteRoom={this.deleteRoom}
            joinRoom={this.handleJoin}
            createGame={this.createGame}
            onChange={this.handleClick}
          />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    lobby: reduxState.lobby,
    state: reduxState
  };
}

export default connect(mapStateToProps, {
  thunkHandleJoin,
  createLobby,
  deleteRoom
})(LobbyContainer);
