import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";
import { signUp } from "../../../store/user/actions.js";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

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
    if (this.props.user.accountCreated) {
      //TODO: Redirect to user's home page to confirm login
      return (
        <h3>
          Thank you for signing up! Please login: <Link to="/login">Login</Link>
        </h3>
      );
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
