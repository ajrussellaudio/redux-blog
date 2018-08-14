import { CREATE_POST, EDIT_POST, DELETE_POST } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_POST: {
      const { type, post } = action;
      const ts = Date.now();
      return [...state, { ...post, created: ts, updated: ts }];
    }
    case EDIT_POST: {
      const { type, id, post } = action;
      return state.map((oldPost, index) => {
        if (id === index) {
          return {
            ...oldPost,
            ...post,
            updated: Date.now()
          };
        }
        return oldPost;
      });
    }
    case DELETE_POST: {
      const { type, id } = action;
      return state.filter((post, index) => id !== index);
    }
    default: {
      return state;
    }
  }
};
