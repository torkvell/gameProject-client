const initialState = null;

export default function roomReducer(state = initialState, action) {
  console.log("action", action);

  switch (action.type) {
    case "LOBBY_CREATED": {
      console.log("ACTION>PAYLOAD", action.payload);
      const newState = action.payload;
      return newState;
    }
    case "USER_LOGOUT":
      return { ...initialState };
    default: {
      return state;
    }
  }
}
