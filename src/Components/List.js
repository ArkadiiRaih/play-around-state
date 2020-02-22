import React from "react";
import styled from "@emotion/styled";
import { boxShadow, colors, darken, buttonStyle } from "../style";
import CardContainer from "../containers/CardContainer";
import CreateCardContainer from "../containers/CreateCardContainer";

const ListArticle = styled.article`
  background-color: ${colors.listColor};
  border: 1px solid ${darken(colors.listColor, 10)};
  height: 100%;
  margin-right: 0.5em;
  padding: 0.5em;
  width: 250px;
  ${boxShadow};
`;
const ListRemove = styled.button`
  ${buttonStyle(colors.dangerColor)}
`;

function List({ list = {}, deleteList }) {
  return (
    <ListArticle>
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards &&
          list.cards.map(cardId => (
            <CardContainer listId={list.id} key={cardId} cardId={cardId} />
          ))}
      </div>
      <ListRemove
        onClick={() => deleteList(list.id)}
        className="List-remove danger"
      >
        Remove List
      </ListRemove>
    </ListArticle>
  );
}

export default List;
