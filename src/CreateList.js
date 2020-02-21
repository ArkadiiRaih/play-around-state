import React, { useState } from "react";
import styled from "@emotion/styled";

const CreateListForm = styled.form``;
const CreateListTitle = styled.input``;
const CreateListSubmit = styled.input``;

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
