import React from "react";
import styled from "@emotion/styled";
import List from "./List";

const ListsSection = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

function Lists({ lists = [] }) {
  return (
    <ListsSection>
      {lists.map(list => (
        <List />
      ))}
    </ListsSection>
  );
}

export default Lists;
