import { CREATE_USER } from "../actionTypes";

export default (state = [], action) => {
  const { type, ...user } = action;
  if ((type = CREATE_USER)) {
    return [...state, user];
  }
  return state;
};
