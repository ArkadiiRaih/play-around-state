import { connect } from "react-redux";
import Lists from "../Components/Lists";

const mapStateToProps = state => ({
  lists: state.lists.ids
});

export default connect(mapStateToProps)(Lists);
