import React from "react";
import { Provider } from "react-redux";

import ConnectedPostList from "../containers/ConnectedPostList";
import ConnectedFilterList from "../containers/ConnectedFilterList";
import PostForm from "./PostForm";

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>React/Redux Blog</h1>
      <div>
        <ConnectedFilterList />
      </div>
      <div>
        <ConnectedPostList />
      </div>
      <PostForm />
    </div>
  </Provider>
);

export default App;
