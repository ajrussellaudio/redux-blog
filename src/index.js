import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { createStore } from "redux";
import appReducer from "./reducers";
import { createUser, createPost } from "./actions";

let store = createStore(appReducer);

console.log("initial state:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("stage changed:", store.getState());
});

store.dispatch(createUser("alan", "Alan Russell"));
store.dispatch(createUser("dan", "Daniel Bugl"));

store.dispatch(
  createPost("dan", {
    title: "First Post",
    text: "Hello! This is the first blog post.",
    category: "welcome"
  })
);
store.dispatch(
  createPost("alan", {
    title: "First Impressions",
    text: "Hiya. This is dead good.",
    category: "reviews"
  })
);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
