// The initial state of the App
export const initialState = {
  drawerOpen: true,
  activeChatroom: "GENERAL"
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    case "SELECT_USER":
      return {
        ...state,
        activeChatroom: action.payload.userId
      };
    default:
      return state;
  }
}

export default appReducer;
