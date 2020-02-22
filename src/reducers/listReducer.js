import { lists as defaultLists } from "../normalizedState";
import {
  addIdToChildren,
  removeIdFromChildren,
  addEntity,
  removeEntity
} from "./_utilities";
import { CARD_CREATE, CARD_DELETE, CARD_MOVE } from "../actions/cardActions";
import { LIST_CREATE, LIST_DELETE } from "../actions/listActions";

// set(chainOfProperties, what you want to replace, the object)

const listReducer = (lists = defaultLists, action) => {
  switch (action.type) {
    case CARD_CREATE: {
      const { cardId, listId } = action.payload;
      return addIdToChildren(lists, listId, "cards", cardId);
    }

    case CARD_DELETE: {
      const { cardId, listId } = action.payload;
      return removeIdFromChildren(lists, listId, "cards", cardId);
    }

    case CARD_MOVE: {
      const { cardId, originListId, destinationListId } = action.payload;
      const stateWithRemove = removeIdFromChildren(
        lists,
        originListId,
        "cards",
        cardId
      );
      return addIdToChildren(
        stateWithRemove,
        destinationListId,
        "cards",
        cardId
      );
    }

    case LIST_CREATE: {
      const { listId, list } = action.payload;
      return addEntity(lists, list, listId);
    }

    case LIST_DELETE: {
      const { listId } = action.payload;
      return removeEntity(lists, listId);
    }
    default:
      return lists;
  }
};

export default listReducer;
