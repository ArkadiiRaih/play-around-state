import React from "react";
import styled from "@emotion/styled";

const CardMove = styled.select``;

const MoveCardToList = ({ listId, lists, moveCardToList }) => (
  <CardMove onChange={moveCardToList} value={listId}>
    {lists.map(list => (
      <option value={list.id} key={list.id}>
        {list.title}
      </option>
    ))}
  </CardMove>
);

export default MoveCardToList;
