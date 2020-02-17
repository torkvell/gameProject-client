import axios from "axios";

function lobbyCreated(data) {
  return { type: "LOBBY_CREATED", payload: data };
}

export const createLobby = (room_name, jwt) => (dispatch, getState) => {
  console.log("TOKEN", jwt);

  const config = { Authorization: `Bearer ${jwt}` };
  axios
    .post("http://localhost:4000/game", room_name, { headers: config })
    .then(response => {
      const roomId = response.data.id;
      const roomName = response.data.room_name;
      console.log("RESPONSE", { roomId, roomName });

      dispatch(lobbyCreated({ roomId, roomName }));
    });
};
