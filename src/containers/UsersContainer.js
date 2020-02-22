import { connect } from "react-redux";
import Users from "../Components/Users";

const mapStateToProps = state => ({
  users: state.users.ids
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
