import React, { createContext, useCallback, useReducer } from "react";
import { v4 as id } from "uuid";

export const GrudgeContext = createContext();

const GRUDGE_ADD = "GRUDGE_ADD";
const GRUDGE_FORGIVE = "GRUDGE_FORGIVE";

/**
 *
 * We add context, so we can grab all passing properties from component that use useContext or wrapped in context consumer.
 * But we lose perfomance. React.memo becomes useless now, because we do not pass parameters directly.
 * Instead we have another benefit - Component tree is much cleaner than before.
 * Also now it's harder to test application.
 */

const addGrudge = ({ name, reason }) => {
  return {
    type: GRUDGE_ADD,
    payload: {
      name,
      reason,
      forgiven: false,
      id: id()
    }
  };
};

const forgiveGrudge = id => {
  return {
    type: GRUDGE_FORGIVE,
    payload: { id }
  };
};

const reducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    return [...state, action.payload];
  }
  if (action.type === GRUDGE_FORGIVE) {
    const newState = state.map(grudge => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
    return newState;
  }
  return state;
};

function GrudgeProvider({ children }) {
  const [grudges, dispatch] = useReducer(reducer, []);

  const onAdd = useCallback(
    (name, reason) => {
      dispatch(addGrudge({ name, reason }));
    },
    [dispatch]
  );

  const onForgive = useCallback(
    id => {
      dispatch(forgiveGrudge(id));
    },
    [dispatch]
  );

  const value = { grudges, onAdd, onForgive };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
}

export default GrudgeProvider;
