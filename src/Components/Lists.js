import React from "react";
import styled from "@emotion/styled";
import ListContainer from "../containers/ListContainer";

const ListsSection = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

function Lists({ lists = [] }) {
  return (
    <ListsSection>
      {lists.map(listId => (
        <ListContainer key={listId} listId={listId} />
      ))}
    </ListsSection>
  );
}

export default Lists;
