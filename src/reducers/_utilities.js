import set from "lodash/fp/set";
import get from "lodash/fp/get";
import pipe from "lodash/fp/pipe";
import omit from "lodash/fp/omit";

const removeFromArray = (array, target) => array.filter(el => el !== target);

export const addEntity = (state, entity, id) => {
  return pipe(
    set(["entities", id], entity),
    set("ids", state.ids.concat(id))
  )(state);
};

export const addIdToChildren = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  return set(path, children.concat(childId), state);
};

export const removeEntity = (state, id) => {
  return pipe(
    omit(`entities.${id}`),
    set("ids", removeFromArray(state.ids, id))
  )(state);
};

export const removeIdFromChildren = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  return set(path, removeFromArray(children, childId), state);
};
