import React from "react";
import styled from "@emotion/styled";
import Tweet from "./Tweet";
import { connect } from "react-redux";
import { LOADING } from "../actions";

const TweetsSection = styled.section``;

function Tweets({ tweets, status }) {
  return (
    <TweetsSection>
      {status === LOADING ? (
        <h1 style={{ fontSize: "70px", color: "#000" }}>LOADING...</h1>
      ) : (
        tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
      )}
    </TweetsSection>
  );
}
const mapStateToProps = ({ tweets, status }) => ({ tweets, status });
export default connect(mapStateToProps)(Tweets);
