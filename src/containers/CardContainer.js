import { connect } from "react-redux";
import Card from "../Components/Card";
import { removeCard } from "../actions/cardActions";
import { createSelector } from "reselect";
import memoize from "lodash/memoize";

const getListId = memoize(cardId =>
  createSelector(
    state => state.lists.entities,
    lists => {
      // console.log("findingListIdforCard", lists, cardId);
      for (const [listId, list] of Object.entries(lists)) {
        if (list.cards.includes(cardId)) {
          return listId;
        }
      }
    }
  )
);

const mapStateToProps = (state, ownProps) => ({
  card: state.cards.entities[ownProps.cardId],
  listId: getListId(ownProps.cardId)(state)
});

export default connect(mapStateToProps, { removeCard })(Card);
