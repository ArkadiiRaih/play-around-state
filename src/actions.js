export const FETCH_CHARACTERS = "FETCH_CARACTERS";
export const FETCH_CHARACTERS_FULLFILLED = "FETCH_CARACTERS_FULLFILLED";

export const fetchCharacters = searchTerm => {
  return {
    type: FETCH_CHARACTERS,
    payload: { searchTerm }
  };
};

export const fetchCharactersFullfilled = payload => {
  return {
    type: FETCH_CHARACTERS_FULLFILLED,
    payload
  };
};
