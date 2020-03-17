import React, { createContext, useCallback } from "react";
import { v4 as id } from "uuid";
import { compose } from "redux";
import useUndoReducer from "./useUndoReducer";

export const GrudgeContext = createContext();

const GRUDGE_ADD = "GRUDGE_ADD";
const GRUDGE_FORGIVE = "GRUDGE_FORGIVE";

const initialState = [];

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

const reducer = (state = initialState, action) => {
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
};

function GrudgeProvider({ children }) {
  const [state, dispatch, undo, redo, isPast, isFuture] = useUndoReducer(
    reducer,
    initialState
  );
  const grudges = state.present;

  const onAdd = useCallback(compose(dispatch, addGrudge), [dispatch]);

  const onForgive = useCallback(compose(dispatch, forgiveGrudge), [dispatch]);

  const value = { grudges, onAdd, onForgive, undo, redo, isPast, isFuture };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
}

export default GrudgeProvider;
