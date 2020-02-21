import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors, boxShadow } from "./style";

const CreateListForm = styled.form`
  background-color: ${colors.listColor};
  display: flex;
  margin-bottom: 1em;
  min-width: 400px;
  padding: 0.5em;
  width: 100%;
  ${boxShadow}
`;

const CreateListTitle = styled.input`
  padding: 1em;
  background-color: ${colors.cardColor};
  width: 100%;
  flex: 5;
`;
const CreateListSubmit = styled.input`
  padding: 1em;
  flex: 1;
`;

function CreateList({ onCreateList }) {
  const [title, setTitle] = useState("");

  const isValid = () => {
    return !!title;
  };

  const isInvalid = () => {
    return !isValid();
  };

  const handleChange = event => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (onCreateList) {
      onCreateList(title);
    }
    setTitle("");
  };

  return (
    <CreateListForm onSubmit={handleSubmit}>
      <CreateListTitle
        id="CreateList-title"
        name="title"
        onChange={handleChange}
        placeholder="New List Title"
        value={title}
      />
      <CreateListSubmit type="submit" disabled={isInvalid()} />
    </CreateListForm>
  );
}

export default CreateList;
