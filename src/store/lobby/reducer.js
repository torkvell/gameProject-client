const initialState = { room: {}, gameRooms: [] };

export default function roomReducer(state = initialState, action) {
  // console.log("action", action);

  switch (action.type) {
    case "LOBBY_CREATED": {
      const room = action.payload;
      console.log("ACTION PAYLOAD", action.payload);
      return {
        ...state,
        room: action.payload,
        gameRooms: [...state.gameRooms, action.payload]
      };
    }
    case "USER_LOGOUT":
      return { ...initialState };
    case "ROOMS_FETCHED": {
      const kamers = action.payload;
      return { ...state, gameRooms: kamers };
    }
    case "ROOM_DELETE": {
      console.log("THE ID IN REDUCER", action.payload, state);

      const updateDeleted = state.gameRooms.filter(
        room => room.id !== action.payload
      );
      return { ...state, gameRooms: updateDeleted };
    }
    default: {
      return state;
    }
  }
}
