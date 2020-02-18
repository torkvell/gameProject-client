import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "../../store/user/actions.js";
import MaterialUInav from "./MaterialUInav";
import { withRouter } from "react-router";

class NavBar extends Component {
  render() {
    console.log(" render of navbar", this.props);

    return (
      <MaterialUInav
        user={this.props.user}
        logOut={() => {
          this.props.logOut();
          this.props.history.push("/");
        }}
      />
    );
  }

  // <div>
  //   <Link path="/" to="/">
  //     Home
  //   </Link>
  //   {this.props.user.userLoggedIn ? (
  //     <div onClick={this.props.logOut}>Log Out</div>
  //   ) : (
  //     <div>
  //       <Link to="/login">Log in</Link>
  //       <Link to="/signup">Sign up</Link>
  //     </div>
  //   )}
  // </div>
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { logOut })(NavBar));
