import { connect } from "react-redux";
import MoveCardToList from "../Components/MoveCardToList";
import { moveCardToList } from "../actions/cardActions";
import { createSelector } from "reselect";
// const getListEntities = state =>

const getListEntities = state => state.lists.entities;

const getLists = createSelector([getListEntities], lists => {
  return Object.values(lists);
});

const mapStateToProps = state => {
  return { lists: getLists(state) };
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
