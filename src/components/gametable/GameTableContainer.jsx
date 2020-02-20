import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class GameTableContainer extends Component {
  componentDidMount() {
    Axios.post("http://localhost:4000/gametable", {
      data: this.props.userData.gameId
    });
    // .then(response =>
    //   console.log(
    //     `Game table server response: ${response} GameID joined: ${this.props.userData.gameId}`
    //   )
    // );
  }

  render() {
    console.log("REDUX state:", this.props.state);
    // const user = [{ id: 1 }, { id: 2 }, { id: 3 }];
    // const deck = [{ id: 1 }];
    // if (this.props.gameTable.users.length === 0) {
    //   return <div>Loading...</div>;
    // }
    Axios.post("http://localhost:4000/gametable", {
      data: this.props.userData.gameId
    });
    return (
      <div>
        <h2> GAME TABLE</h2>
        {this.props.gameTable.users.map(user => {
          return <div>User: {user}</div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userData: reduxState.user,
    gameTable: reduxState.gameTable,
    state: reduxState
  };
}

export default connect(mapStateToProps)(GameTableContainer);
