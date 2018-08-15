import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostForm from "../components/PostForm";

import { createPost } from "../actions";

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ createPost }, dispatch);

const ConnectedPostForm = connect(
  null,
  mapDispatchToProps
)(PostForm);

export default ConnectedPostForm;
