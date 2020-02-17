const initialState = [];

export default function roomReducer(state = initialState, action) {
  console.log("action", action);

  switch (action.type) {
    case "LOBBY_CREATED": {
      return [...state, action.payload];
    }
    case "USER_LOGOUT":
      return { ...initialState };
    default: {
      return state;
    }
  }
}
