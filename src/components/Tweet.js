import React from "react";
import styled from "@emotion/styled";
import { colors } from "../style";

const TweetArticle = styled.article`
  border: 1px solid ${colors.controlColor};
  margin: 1em 0;
  padding: 1em;
`;

function Tweet({ tweet = {} }) {
  return (
    <TweetArticle>
      <header>
        <h2>{tweet.user.name} writes:</h2>
      </header>
      <p>{tweet.text}</p>
    </TweetArticle>
  );
}

export default Tweet;
