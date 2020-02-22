import { connect } from "react-redux";
import CreateUser from "../Components/CreateUser";
import { createUser } from "../actions/usersActions";

const mapDispatchToProps = {
  createUser
};

export default connect(null, mapDispatchToProps)(CreateUser);
