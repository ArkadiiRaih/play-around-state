import React from "react";
import Grudges from "./Grudges";
import NewGrudge from "./NewGrudge";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function App() {
  return (
    <div
      css={css`
        width: 60%;
        margin: auto;
      `}
    >
      <NewGrudge />
      <Grudges />
    </div>
  );
}

export default App;
