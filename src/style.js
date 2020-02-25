import { css } from "@emotion/core";

export const colors = {
  buttonColor: "rgb(28, 209, 83)",
  dangerColor: "#f0544f",
  controlColor: "#c79528",
  fontColor: "#28283d"
};

export const darken = (color, amt) => color;
export const lighten = (color, amt) => color;

export const inputStyle = color => css`
  background-color: ${color};
  border: 1px solid ${darken(color, 10)};
  margin: 0.5em 0;
  outline: none;
  padding: 1em;
  width: 100%;
  &:focus {
    background-color: ${lighten(color, 2)};
  }
`;

export const boxShadow = css`
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

export const global = css`
  html,
  body,
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  body,
  input {
    color: ${colors.fontColor};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  select {
    border-radius: 0;
    color: ${colors.fontColor};
    margin: 1em 0;
    padding: 1em;
    width: 100%;
  }

  option {
    padding: 1em;
  }

  input {
    ${inputStyle(colors.white)};
  }
`;
