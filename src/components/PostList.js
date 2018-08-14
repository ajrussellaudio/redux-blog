import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post, index) => (
      <li key={index}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

export default PostList;
