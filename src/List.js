import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import CreateCard from "./CreateCard";
import { boxShadow, colors, darken } from "./style";

const ListArticle = styled.article`
  background-color: ${colors.listColor};
  border: 1px solid ${darken(colors.listColor, 10)};
  height: 100%;
  margin-right: 0.5em;
  padding: 0.5em;
  width: 250px;
  ${boxShadow};
`;

function List({ list = {}, removeList }) {
  return (
    <ListArticle>
      <h2>{list.title}</h2>
      <CreateCard />
      <div>
        {list.cards &&
          list.cards.map(cardId => (
            <Card key={cardId} cardId={cardId} listId={list.id} />
          ))}
      </div>
    </ListArticle>
  );
}

export default List;
