import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import Home from "./components/Home";
import LoginContainer from "./components/user/login/LoginContainer";
import SignUpContainer from "./components/user/signup/SignUpContainer";
import LobbyContainer from "./components/lobby/LobbyContainer";
import { connect } from "react-redux";
import GameTableContainer from "./components/gametable/GameTableContainer";

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log("STREAM response:", action);
      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <Switch>
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/lobby" component={LobbyContainer} />
          <Route path="/" exact component={Home} />
          <Route path="/gametable" component={GameTableContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = () => {};

// const mapStateToProps = state => {
//   console.log(state);
//   return { state: state };
// };

export default connect(mapDispatchToProps)(App);
