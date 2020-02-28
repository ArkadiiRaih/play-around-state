import React from "react";
import styled from "@emotion/styled";

const ItemArticle = styled.article``;
const ItemRemove = styled.button`
  background-color: white;
  color: #f65e81;
  border: none;
  margin-left: 1em;
  outline: none;
  padding: 0;
  &:hover {
    background-color: white;
    text-decoration: underline;
  }
`;

function Item({ item }) {
  return (
    <ItemArticle>
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {}}
          id={item.id}
        />
        {item.value}
      </label>
      <ItemRemove onClick={() => {}}>Remove</ItemRemove>
    </ItemArticle>
  );
}

export default Item;
