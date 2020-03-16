import React, { useContext } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { GrudgeContext } from "./GrudgeContext";

function Grudge({ grudge }) {
  const { onForgive } = useContext(GrudgeContext);
  return (
    <div
      css={css`
        border: 1px solid #00000050;
        padding: 20px;
      `}
    >
      <h3>{grudge.name}</h3>
      <input
        type="checkbox"
        onChange={() => onForgive(grudge.id)}
        checked={grudge.forgiven}
        name="forgiveness"
      />
      <label htmlFor="forgiveness">{grudge.reason}</label>
    </div>
  );
}

export default Grudge;
