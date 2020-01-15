export const questionReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_QUESTION":
      return action.payload;
    default:
      return state;
  }
};
