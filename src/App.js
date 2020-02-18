import React, { Component } from "react";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./components/navbar/NavBarContainer";
import Home from "./components/Home";
import LoginContainer from "./components/user/login/LoginContainer";
import SignUpContainer from "./components/user/signup/SignUpContainer";
import { PersistGate } from "redux-persist/integration/react";
import LobbyContainer from "./components/lobby/LobbyContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <NavBarContainer />
          <Switch>
            <PersistGate loading={null} persistor={persistor}>
              <Route path="/signup" component={SignUpContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/lobby" component={LobbyContainer} />
              <Route path="/" exact component={Home} />
            </PersistGate>
          </Switch>
        </Provider>
      </div>
    );
  }
}
export default App;
