import { connect } from "react-redux";
import List from "../Components/List";
import { deleteList } from "../actions/listActions";

const mapStateToProps = (state, ownProps) => ({
  list: state.lists.entities[ownProps.listId]
});
const mapDispatchToProps = {
  deleteList
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
