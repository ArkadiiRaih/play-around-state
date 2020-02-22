import { connect } from "react-redux";
import Users from "../Components/Users";
import { createSelector } from "reselect";

const getUsers = users => users.ids;

const createUserSelector = createSelector(state => state.users, getUsers);

const mapStateToProps = state => ({
  users: createUserSelector(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
