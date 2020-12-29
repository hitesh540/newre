export const COVReducer = (state = false, action) => {
    switch (action.type) {
      case "COV":
        return action.payload;
      default:
        return state;
    }
  };
  