import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(`REDUX state: `, this.props.state);
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    state: reduxState
  };
}

export default connect(mapStateToProps)(Home);
