import React from "react";

export default function CreateRoomForm(props) {
  return (
    <div>
      <h4>Create room</h4>
      <form onSubmit={props.handleSubmit}>
        <label>
          ROOM
          <input
            type="text"
            placeholder="Room to enter"
            name="room"
            value={props.state.room}
            onChange={props.onChange}
          ></input>
        </label>
        <button type="submit">ENTER</button>
      </form>
    </div>
  );
}
