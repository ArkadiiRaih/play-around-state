import { useReducer, useCallback } from "react";

function compose(...fns) {
  return function(arg) {
    return fns.reduceRight((v, f) => f(v), arg);
  };
}

const UNDO = "UNDO";
const REDO = "REDO";

const undoAction = () => {
  return {
    type: UNDO
  };
};

const redoAction = () => {
  return {
    type: REDO
  };
};

const useUndoReducer = (reducer, initialState) => {
  const undoState = {
    past: [],
    present: initialState,
    future: []
  };

  const undoReducer = (state, action) => {
    const theirState = reducer(state.present, action);

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
    if (theirState !== state) {
      return {
        past: [state.present, ...state.past],
        present: theirState,
        future: []
      };
    }
    return theirState;
  };

  const [state, dispatch] = useReducer(undoReducer, undoState);
  const isPast = !!state.past.length;
  const isFuture = !!state.future.length;
  return [
    state,
    dispatch,
    useCallback(compose(dispatch, undoAction)),
    useCallback(compose(dispatch, redoAction)),
    isPast,
    isFuture
  ];
};

export default useUndoReducer;
