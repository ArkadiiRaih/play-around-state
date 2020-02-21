import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import CreateCard from "./CreateCard";

const ListArticle = styled.article``;

function List({ list = {}, removeList }) {
  return (
    <ListArticle>
      <h2>{list.title}</h2>
      <CreateCard />
      <div>
        {list.cards.map(cardId => (
          <Card key={cardId} cardId={cardId} listId={list.id} />
        ))}
      </div>
    </ListArticle>
  );
}

export default List;
