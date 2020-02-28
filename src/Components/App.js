import React from "react";
import NewItem from "./NewItem";
import Items from "./Items";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { globalCSS } from "../styles";

const Application = styled.div`
  margin: auto;
  max-width: 400px;
`;

function App() {
  return (
    <Application className="Application">
      <Global styles={globalCSS} />
      <NewItem />
      <Items title="Unpacked Items" items={[]} />
      <Items title="Packed Items" items={[]} />
      <button className="button full-width">Mark All As Unpacked</button>
    </Application>
  );
}

export default App;
