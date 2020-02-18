import React, { Component } from "react";
import { connect } from "react-redux";
import { createLobby, getRooms, deleteRoom } from "../../store/lobby/actions";

class LobbyContainer extends Component {
  state = {
    room: ""
  };

  componentDidMount() {
    this.props.getRooms();
  }

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
    console.log("THE RENDER STATE:", this.props.lobby.gameRooms);
    // if (this.props.lobby.gameRooms.length < 1) return <h2>Loading...</h2>;
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
