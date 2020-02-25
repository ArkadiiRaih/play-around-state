import { css } from "@emotion/core";

export const colors = {
  buttonColor: "rgb(28, 209, 83)",
  dangerColor: "#f0544f",
  controlColor: "#c79528",
  fontColor: "#28283d"
};

export const darken = (color, amt) => LightenDarkenColor(color, -amt);
export const lighten = (color, amt) => LightenDarkenColor(color, -amt);

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
