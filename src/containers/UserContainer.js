import { connect } from "react-redux";
import User from "../Components/User";

const mapStateToProps = (state, ownProps) => ({
  user: state.users.entities[ownProps.userId]
});

export default connect(mapStateToProps)(User);
