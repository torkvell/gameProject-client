const initialState = {
  userLoggedIn: false,
  id: false,
  email: false,
  token: null,
  error: null,
  gameId: null,
  accountCreated: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_CREATED":
      return { ...state, accountCreated: true };
    case "ERROR":
      const errorMsg = action.payload.message;
      return { ...state, error: errorMsg };
    case "USER_LOGOUT":
      return { ...initialState, accountCreated: false };
    case "LOGIN_SUCCESS":
      // console.log(`login success reducer:`, action.payload);
      return {
        ...state,
        userLoggedIn: true,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token
      };
    case "USER_GAME_UPDATE": {
      // console.log("THE UPDATE USER PAYLOAD", action.payload);
      return { ...state, gameId: action.payload };
    }
    default:
      return state;
  }
};
