import { connect } from "react-redux";
import CreateList from "../Components/CreateList";
import { createList } from "../actions/listActions";

const mapDispatchToProps = {
  createList
};

export default connect(null, mapDispatchToProps)(CreateList);
