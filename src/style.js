import { css } from "@emotion/core";

export const lighten = (color, amt) => LightenDarkenColor(color, amt);
export const darken = (color, amt) => LightenDarkenColor(color, -amt);

export const colors = {
  buttonColor: "#c6d8d3",
  listColor: "#fdf0d5",
  cardColor: `${lighten("#fdf0d5", 5)}`,
  dangerColor: "#f0544f",
  controlColor: "#197278",
  fontColor: "#283d3b"
};

export const boxShadow = css`
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

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
    background-color: ${lighten(color, 5)};
  }
  &:active {
    background-color: ${darken(color, 5)};
  }
  &:disabled {
    background-color: ${lighten(color, 10)};
    border-color: ${color};
    color: ${color};
  }
`;

export const globalStyles = css`
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
  button,
  input[type="submit"] {
    ${buttonStyle(colors.buttonColor)};
    &.danger {
      ${buttonStyle(colors.dangerColor)};
    }
  }
`;

function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
