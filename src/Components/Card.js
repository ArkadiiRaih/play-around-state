import React from "react";
import styled from "@emotion/styled";
import { colors, darken, boxShadow, buttonStyle } from "../style";
import MoveCardToListContainer from "../containers/MoveCardToListContainer";

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

const CardRemove = styled.button`
  ${buttonStyle(colors.dangerColor)}
`;

const Card = ({ card = {}, listId, removeCard = () => {} }) => {
  return (
    <CardArticle>
      <h3>{card.title}</h3>
      <CardDescription>{card.description}</CardDescription>
      <MoveCardToListContainer cardId={card.id} listId={listId} />
      <CardRemove onClick={() => removeCard(card.id, listId)}>
        Remove Card
      </CardRemove>
    </CardArticle>
  );
};

export default Card;
