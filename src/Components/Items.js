import React, { useState } from "react";
import styled from "@emotion/styled";
import Filter from "./Filter";
import Item from "./Item";

const ItemsSection = styled.section``;

function Items({ title, items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const findMatches = (wordToMatch, items) => {
    return items.filter(item => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, "gi");
      return item.value.match(regex);
    });
  };

  return (
    <ItemsSection>
      <h2>
        {title} ({items.length})
      </h2>
      <Filter searchTerm={searchTerm} onChange={setSearchTerm} />
      {findMatches(searchTerm, items).map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ItemsSection>
  );
}

export default Items;
