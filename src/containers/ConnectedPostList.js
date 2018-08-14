import { connect } from "react-redux";
import PostList from "../components/PostList";

const getUserObjects = users => {
  return users.map(({ user, ...rest }) => {
    const userObj = state.users.find(({ username }) => user === username);
    return {
      user: userObj,
      ...rest
    };
  });
};

const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter
    ? state.posts.filter(post => post.category === state.filter)
    : state.posts;
  return {
    posts: getUserObjects(filteredPosts)
  };
};

const ConnectedPostList = connect(mapStateToProps)(PostList);

export default ConnectedPostList;
