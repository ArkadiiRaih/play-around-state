export const ADD_TWEETS = "ADD_TWEETS";
export const SET_STATUS = "SET_STATUS";
export const LOADING = "LOADING";
export const LOADED = "LOADED";

export const fetchTweets = () => {
  return dispatch => {
    dispatch(setStatus(LOADING));
    fetch("http://tweet-stream.glitch.me/api/tweets")
      .then(response => response.json())
      .then(data => {
        dispatch(setStatus(LOADED));
        dispatch(addTweets(data.tweets));
      });
  };
};

export const addTweets = tweets => {
  return {
    type: ADD_TWEETS,
    payload: tweets
  };
};

export const setStatus = status => {
  return {
    type: SET_STATUS,
    payload: {
      status
    }
  };
};
