import React from "react";
import styled from "@emotion/styled";
import Tweet from "./Tweet";
import { connect } from "react-redux";

const TweetsSection = styled.section``;

function Tweets({ tweets = [] }) {
  return (
    <TweetsSection>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </TweetsSection>
  );
}
const mapStateToProps = ({ tweets }) => ({ tweets });
export default connect(mapStateToProps)(Tweets);
