import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class GameTableContainer extends Component {
  componentDidMount() {
    Axios.post("http://localhost:4000/gametable", {
      data: this.props.userData.gameId
    }).then(response =>
      console.log("RESPONSE FROM GAMRTABLE REQUEST", response)
    );
  }

  render() {
    const user = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const deck = [{ id: 1 }];
    return (
      <div>
        <h2> GAME TABLE</h2>
        {user.map(user => {
          return <div>User: {user.id}</div>;
        })}
        {console.log("Deck: ", deck)}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userData: reduxState.user
  };
}

export default connect(mapStateToProps)(GameTableContainer);
