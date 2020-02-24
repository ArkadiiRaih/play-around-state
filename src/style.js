import { css } from "@emotion/core";

export const darken = (color, value) => color;
export const lighten = (color, value) => color;

export const colors = {
  buttonColor: "rgb(28, 209, 83)",
  dangerColor: "#f0544f",
  controlColor: "#c79528",
  fontColor: "#28283d",
  white: "#ffffff"
};

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

export const buttonStyle = color => css`
  ${inputStyle(color)};
  &:hover {
    transform: scale(1.1);
    background-color: ${lighten(color, 5)};
  }
  &:active {
    transform: scale(0.9);
    background-color: ${darken(color, 5)};
  }
  &:disabled {
    background-color: ${lighten(color, 10)};
    border-color: ${color};
    color: ${color};
  }
`;

export const boxShadow = css`
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

export const globalCSS = css`
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

  button,
  input[type="submit"] {
    ${buttonStyle(colors.buttonColor)};
    /* &.danger {
      @include button-style($danger-color);
    } */
  }
`;
