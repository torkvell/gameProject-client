import axios from "axios";

function lobbyCreated(data) {
  return { type: "ROOM_CREATED", payload: data };
}

const baseUrl = "http://localhost:4000";

export const createLobby = (room_name, jwt) => (dispatch, getState) => {
  console.log(`thunk create lobby: `, room_name, jwt);
  const config = { Authorization: `Bearer ${jwt}` };
  axios
    .post(`${baseUrl}/room`, { data: room_name }, { headers: config })
    .then(response => {
      console.log(`createLobby thunk server resposne: `, response);
      const roomId = response.data.id;
      const roomName = response.data.room_name;
      console.log("RESPONSE", { roomId, roomName });
      dispatch(lobbyCreated({ roomId, roomName }));
    });
};

const roomDeleted = id => {
  // console.log("THE ID IN ACTIO CREATEOR", id);

  return {
    type: "ROOM_DELETE",
    payload: id
  };
};

export const deleteRoom = id => (dispatch, getState) => {
  axios
    .delete(`${baseUrl}/room`, {
      data: {
        id: id
      }
    })
    .then(response => {
      console.log("THE DELETED ROOM", response);
      dispatch(roomDeleted(response.data));
    });
};

function updateUser(gameid) {
  return {
    type: "USER_GAME_UPDATE",
    payload: gameid
  };
}

export const thunkHandleJoin = (gameId, userId) => dispatch => {
  console.log("THE IDSSSS:(THUNK HANDLE)", gameId, userId);
  axios
    .post(`${baseUrl}/addGameToUser`, {
      gameId,
      userId
    })
    .then(response => {
      console.log("THE JOIN THUNK RESPONSE", response);
      // const
      dispatch(updateUser(response.data));
    });
};
