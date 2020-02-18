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
    default: {
      return state;
    }
  }
}
