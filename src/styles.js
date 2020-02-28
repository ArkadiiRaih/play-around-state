import { css } from "@emotion/core";

export const globalCSS = css`
  html,
  * {
    box-sizing: border-box;
  }

  body,
  input {
    font: caption;
  }

  input {
    padding: 0.5em;
    border: 1px solid #f32e5b;
    background-color: #fbbfcd;
  }

  button,
  .button,
  input[type="submit"] {
    background-color: #f32e5b;
    border: 1px solid #e10d3d;
    color: white;
    padding: 0.5em;
    transition: all 0.2s;
  }

  button:hover,
  .button:hover,
  input[type="submit"]:hover {
    background-color: #f65e81;
  }

  button:active,
  .button:active,
  input[type="submit"]:active {
    background-color: #f4466e;
  }

  button.full-width,
  .button.full-width,
  input[type="submit"].full-width {
    width: 100%;
    margin: 1em 0;
  }
`;