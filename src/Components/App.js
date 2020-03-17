import React, { useContext } from "react";
import Grudges from "./Grudges";
import NewGrudge from "./NewGrudge";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { GrudgeContext } from "./GrudgeContext";

function App() {
  const { onUndo, onRedo, isPast, isFuture } = useContext(GrudgeContext);
  return (
    <div
      css={css`
        width: 60%;
        margin: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
      `}
    >
      <NewGrudge />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <button onClick={onUndo} disabled={!isPast}>
          undo
        </button>
        <button onClick={onRedo} disabled={!isFuture}>
          redo
        </button>
      </div>
      <Grudges />
    </div>
  );
}

export default App;
