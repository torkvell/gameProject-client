import React from "react";

export default function Login(props) {
  return (
    <div>
      <div>Login:</div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={props.values.email}
          onChange={props.handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={props.values.password}
          onChange={props.handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
