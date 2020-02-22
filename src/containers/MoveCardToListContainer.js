import { connect } from "react-redux";
import MoveCardToList from "../Components/MoveCardToList";
import { moveCardToList } from "../actions/cardActions";

const getListEntities = state => Object.values(state.lists.entities);

const mapStateToProps = state => {
  return { lists: getListEntities(state) };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveCardToList(event) {
      const destinationListId = event.target.value;
      dispatch(
        moveCardToList(ownProps.cardId, ownProps.listId, destinationListId)
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveCardToList);
