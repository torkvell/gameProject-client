import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../store/user/actions.js";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link path="/" to="/">
          Home
        </Link>
        {this.props.user.userLoggedIn ? (
          <div onClick={this.props.logOut}>Log Out</div>
        ) : (
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
            
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(NavBar);
