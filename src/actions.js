export const ADD_TWEETS = "ADD_TWEETS";
export const fetchTweets = () => {
  return dispatch => {
    console.log("dispatched");
    fetch("http://tweet-stream.glitch.me/api/tweets")
      .then(response => response.json())
      .then(data => {
        console.log(data, dispatch);
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
