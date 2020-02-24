import React from "react";
import styled from "@emotion/styled";
import FetchTweets from "./FetchTweets";
import Tweets from "./Tweets";

const Application = styled.div`
  h1 {
    text-align: center;
  }
  margin: 0.5em auto;
  max-width: 600px;
`;

function App() {
  return (
    <Application>
      <h1>Tweet Stream</h1>
      <FetchTweets />
      <Tweets />
    </Application>
  );
}

export default App;
