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
    return (
      <div>
        <h2> GAME TABLE</h2>
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
