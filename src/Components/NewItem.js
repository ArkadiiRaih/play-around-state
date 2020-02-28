import React, { useState } from "react";
import styled from "@emotion/styled";

const NewItemForm = styled.form`
  display: flex;
`;
const NewItemInput = styled.input`
  width: 100%;
`;
const NewItemSubmit = styled.input``;

function NewItem({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = e => {
    // Do something when the state of this input changes.
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ onSubmit, value });

    if (onSubmit) onSubmit(value);

    // Do something when a new value is submitted.
    setValue("");
    // Reset the state of the component.
  };
  return (
    <NewItemForm onSubmit={handleSubmit}>
      <NewItemInput type="text" value={value} onChange={handleChange} />
      <NewItemSubmit className="button" type="submit" />
    </NewItemForm>
  );
}

export default NewItem;
