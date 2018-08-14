import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FilterList from "../components/FilterList";

import { setFilter, clearFilter } from "../actions";

const mapStateToProps = (state, props) => {
  return state.props.reduce((acc, post) => {
    if (!acc.includes(post.category)) {
      return [...acc, post.category];
    }
    return acc;
  }, []);
};

const mapDispatchToProps = (dispatch, props) => {
  bindActionCreators({ setFilter, clearFilter }, dispatch);
};

const ConnectedFilterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);

export default ConnectedFilterList;
