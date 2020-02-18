import React, { Component } from "react";
import { connect } from "react-redux";
import { createLobby, getRooms } from "../../store/lobby/actions";

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
    console.log("THE ROOM VALS:", this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState;
    this.props.createLobby(this.state, this.props.user.token);
  };

  render() {
    console.log("THE RENDER STATE:", this.props.rooms.gameRooms);
    if (this.props.rooms.gameRooms.length < 1) return <h2>Loading...</h2>;
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
        {console.log("THE ROOMS FROM STATE:", this.props.rooms.gameRooms)}

        {this.props.rooms.gameRooms.map(room => {
          return (
            <div>
              <h4>{room.room_name}</h4>
              <button>Join!</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("THE REDUX STATE IN LOBBYCOMP", reduxState);
  return {
    user: reduxState.user,
    rooms: reduxState.rooms
  };
}

export default connect(mapStateToProps, { createLobby, getRooms })(
  LobbyContainer
);
