import React from "react";
import styled from "@emotion/styled";
import MoveCardToList from "./MoveCardToList";

const CardArticle = styled.article``;
const CardDescription = styled.div``;

const Card = ({ card = {}, listId }) => {
  return (
    <CardArticle className="Card">
      <h3>{card.title}</h3>
      <CardDescription>{card.description}</CardDescription>
      <MoveCardToList cardId={card.id} listId={listId} />
    </CardArticle>
  );
};

export default Card;
