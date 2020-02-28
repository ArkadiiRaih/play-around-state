import React from "react";
import styled from "@emotion/styled";
import Filter from "./Filter";
import Item from "./Item";

const ItemsSection = styled.section``;

function Items({ title, items }) {
  return (
    <ItemsSection>
      <h2>
        {title} ({items.length})
      </h2>
      <Filter searchTerm={""} onChange={() => {}} />
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ItemsSection>
  );
}

export default Items;
