import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { logIn } from "../../../store/user/actions.js";
import { Redirect } from "react-router";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.user.userLoggedIn) {
      //TODO: Redirect to user's home page to confirm login
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Login
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.props.user.error ? (
          <div>Error: {this.props.user.error}</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logIn })(LoginContainer);
