import React from "react";

import ConnectedPostList from "./ConnectedPostList";
import ConnectedFilterList from "./ConnectedFilterList";

const App = ({ store }) => (
  <div>
    <h1>React/Redux Blog</h1>
    <div>
      <ConnectedFilterList store={store} />
    </div>
    <div>
      <ConnectedPostList store={store} />
    </div>
  </div>
);

export default App;
