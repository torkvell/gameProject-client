const initialState = null;

export default function roomReducer(state = initialState, action) {
  // console.log("action", action);

  switch (action.type) {
    case "TABLE_USERS": {
      console.log("TABLE_USER reducer input: ", action);
      const data = action.payload;
      return data;
    }
    default: {
      return state;
    }
    case "USER_LOGOUT":
      return { ...initialState };
  }
}
