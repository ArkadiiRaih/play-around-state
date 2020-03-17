import React, { createContext, useCallback, useReducer } from "react";
import { v4 as id } from "uuid";
import { compose } from "redux";

export const GrudgeContext = createContext();

const GRUDGE_ADD = "GRUDGE_ADD";
const GRUDGE_FORGIVE = "GRUDGE_FORGIVE";
const UNDO = "UNDO";
const REDO = "REDO";

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

const undo = () => {
  return {
    type: UNDO
  };
};

const redo = () => {
  return {
    type: REDO
  };
};

const reducer = (state = defaultState, action) => {
  if (action.type === GRUDGE_ADD) {
    const newPresent = [action.payload, ...state.present];
    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: state.future
    };
  }
  if (action.type === GRUDGE_FORGIVE) {
    const newPresent = state.present.map(grudge => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: state.future
    };
  }
  if (action.type === UNDO) {
    const [newPresent, ...newPast] = state.past;
    const newFuture = [state.present, ...state.future];
    return {
      past: newPast,
      present: newPresent,
      future: newFuture
    };
  }
  if (action.type === REDO) {
    const [newPresent, ...newFuture] = state.future;
    const newPast = [state.present, ...state.past];
    return {
      past: newPast,
      present: newPresent,
      future: newFuture
    };
  }
  return state;
};

const initialState = [];

const defaultState = {
  past: [],
  present: initialState,
  future: []
};

function GrudgeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const grudges = state.present;
  const isPast = !!state.past.length;
  const isFuture = !!state.future.length;

  const onAdd = useCallback(compose(dispatch, addGrudge), [dispatch]);

  const onForgive = useCallback(compose(dispatch, forgiveGrudge), [dispatch]);

  const onUndo = useCallback(compose(dispatch, undo), [dispatch]);

  const onRedo = useCallback(compose(dispatch, redo), [dispatch]);

  const value = { grudges, onAdd, onForgive, onUndo, onRedo, isPast, isFuture };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
}

export default GrudgeProvider;
