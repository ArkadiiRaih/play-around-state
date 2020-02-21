import React from "react";
import styled from "@emotion/styled";
import MoveCardToList from "./MoveCardToList";
import { colors, darken, boxShadow } from "./style";

const CardArticle = styled.article`
  background-color: ${colors.cardColor};
  border: 1px solid ${darken(colors.cardColor, 20)};
  margin: 0.5em;
  padding: 1em;
  ${boxShadow};
  h3 {
    font-size: 1.2em;
    margin-top: 0;
  }
`;
const CardDescription = styled.div`
  margin: 1em 0;
`;

const Card = ({ card = {}, listId }) => {
  return (
    <CardArticle>
      <h3>{card.title}</h3>
      <CardDescription>{card.description}</CardDescription>
      <MoveCardToList cardId={card.id} listId={listId} />
    </CardArticle>
  );
};

export default Card;
