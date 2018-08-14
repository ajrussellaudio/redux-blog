import { SET_FILTER, CLEAR_FILTER } from "../actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    case CLEAR_FILTER: {
      return null;
    }
    default: {
      return state;
    }
  }
};
