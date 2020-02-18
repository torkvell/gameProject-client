const initialState = {
  userLoggedIn: false,
  id: false,
  email: false,
  token: null,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_CREATED":
      const tokenJWT = action.payload.password;
      return { ...state, userLoggedIn: true, token: tokenJWT };
    case "ERROR":
      const errorMsg = action.payload.message;
      return { ...state, error: errorMsg };
    case "USER_LOGOUT":
      return { ...initialState };
    case "LOGIN_SUCCESS":
      console.log(`login success reducer:`, action.payload);
      return {
        ...state,
        userLoggedIn: true,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token
      };
    default:
      return state;
  }
};
