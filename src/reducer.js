export const initialState = {
  user: null,
  feed: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_FEED: "SET_FEED",
};

const reducer = (action, state) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_FEED:
      return {
        ...state,
        feed: action.feed,
      };

    default:
      return state;
  }
};

export default reducer;
