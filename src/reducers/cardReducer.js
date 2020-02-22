import { cards as defaultCards } from "../normalizedState";
import { CARD_CREATE, CARD_DELETE } from "../actions/cardActions";

import { addEntity, removeEntity } from "./_utilities";

const cardReducer = (cards = defaultCards, action) => {
  switch (action.type) {
    case CARD_CREATE: {
      const { card, cardId } = action.payload;
      return addEntity(cards, card, cardId);
    }
    case CARD_DELETE: {
      const { cardId } = action.payload;
      return removeEntity(cards, cardId);
    }
    default:
      return cards;
  }
};

export default cardReducer;
