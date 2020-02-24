import React from "react";
import { fetchTweets } from "../actions";
import { connect } from "react-redux";

function FetchTweets({ fetchTweets }) {
  return <button onClick={fetchTweets}>Fetch Tweets</button>;
}

const mapDispatchToProps = { fetchTweets };

export default connect(null, mapDispatchToProps)(FetchTweets);
