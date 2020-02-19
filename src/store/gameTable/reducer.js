const initialState = null;

export default function roomReducer(state = initialState, action) {
  // console.log("action", action);

  switch (action.type) {
    case "TABLE_USERS": {
      const data = { users: action.payload, deck_id: action.deck_id };

      return [...state, data];
    }
    default: {
      return state;
    }
  }
}
