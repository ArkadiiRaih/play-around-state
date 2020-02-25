import React from "react";
import styled from "@emotion/styled";
import FetchCharacters from "./FetchCharacters";
import Characters from "./Characters";

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
      <h1>Star Wars Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </Application>
  );
}

export default App;
