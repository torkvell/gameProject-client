import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";
import { signUp } from "../../../store/user/actions.js";
import { Redirect } from "react-router";

class SignUpContainer extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state.email, this.state.password);
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
      //TODO: Redirect to user's home page to confirm account creation
      return <Redirect to="/" />;
    }
    return (
      <div>
        <SignUp
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

export default connect(mapStateToProps, { signUp })(SignUpContainer);
