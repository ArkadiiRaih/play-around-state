import React from "react";
import NewItem from "./NewItem";
import Items from "./Items";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { globalCSS } from "../styles";
import { inject, observer } from "mobx-react";
import UnpackAll from "./UnpackAll";

const Application = styled.div`
  margin: auto;
  max-width: 400px;
`;

const UnpackedItems = inject("itemList")(
  observer(({ itemList }) => {
    return <Items title="Unpacked Items" items={itemList.unpackedItems} />;
  })
);

const PackedItems = inject("itemList")(
  observer(({ itemList }) => {
    return <Items title="PackedItems" items={itemList.packedItems} />;
  })
);

const UnpackItems = inject("itemList")(
  observer(({ itemList }) => {
    return <UnpackAll title="PackedItems" items={itemList.packedItems} />;
  })
);

function App() {
  return (
    <Application className="Application">
      <Global styles={globalCSS} />
      <NewItem />
      <UnpackedItems />
      <PackedItems />
      <UnpackItems>Mark All As Unpacked</UnpackItems>
    </Application>
  );
}

export default App;
