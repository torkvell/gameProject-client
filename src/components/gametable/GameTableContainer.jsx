import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { gameTableToState } from "../../store/gameTable/action";

class GameTableContainer extends Component {
  componentDidMount() {
    const response = Axios.post("http://localhost:4000/gametable", {
      data: this.props.userData.gameId
    }).then(res => {
      const resObj = res.data;
      this.props.gameTableToState(resObj);
    });
  }

  render() {
    console.log("gameID: ", this.props.userData.gameId);

    // const user = [{ id: 1 }, { id: 2 }, { id: 3 }];
    // const deck = [{ id: 1 }];
    if (this.props.gameTable.users.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2> GAME TABLE</h2>
        {this.props.gameTable.users.map(user => {
          return <div>User: {user.id}</div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userData: reduxState.user,
    gameTable: reduxState.gameTable
  };
}

export default connect(mapStateToProps, { gameTableToState })(
  GameTableContainer
);
