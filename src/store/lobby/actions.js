import axios from "axios";

function lobbyCreated(data) {
  return { type: "ROOM_CREATED", payload: data };
}

const baseUrl = "http://localhost:4000";

export const createLobby = (room_name, jwt) => (dispatch, getState) => {
  const config = { Authorization: `Bearer ${jwt}` };
  axios
    .post(`${baseUrl}/room`, room_name, { headers: config })
    .then(response => {
      const roomId = response.data.id;
      const roomName = response.data.room_name;
      console.log("RESPONSE", { roomId, roomName });

      dispatch(lobbyCreated({ roomId, roomName }));
    });
};

function roomsFetched(rooms) {
  return {
    type: "ROOMS_FETCHED",
    payload: rooms
  };
}
export const getRooms = () => (dispatch, getState) => {
  axios.get(`${baseUrl}/rooms`).then(gamerooms => {
    console.log("ROOMS", gamerooms);
    dispatch(roomsFetched(gamerooms.data));
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
    .delete(`${baseUrl}/lobby/room`, {
      data: {
        id: id
      }
    })
    .then(response => {
      console.log("THE DELETED ROOM", response);
      dispatch(roomDeleted(response.data));
    });
};
