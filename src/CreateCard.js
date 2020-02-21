import React, { useState } from "react";
import styled from "@emotion/styled";

const CreateCardForm = styled.form``;
const CreateCardTitle = styled.input``;
const CreateCardDescription = styled.input``;
const CreateCardSubmit = styled.input``;

function CreateCard({ onCreateCard }) {
  const [cardData, setCardData] = useState({
    title: "",
    description: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setCardData(cardData => ({ ...cardData, [name]: value }));
  };

  const isValid = () => {
    const { title, description } = cardData;
    return title && description;
  };

  const isInvalid = () => {
    return !isValid();
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isInvalid()) return;

    if (onCreateCard) {
      onCreateCard(cardData);
    }

    setCardData({
      title: "",
      description: ""
    });
  };

  return (
    <CreateCardForm onSubmit={handleSubmit}>
      <CreateCardTitle
        onChange={handleChange}
        name="title"
        placeholder="Title"
        type="text"
        value={cardData.title}
      />
      <CreateCardDescription
        onChange={handleChange}
        placeholder="Description"
        name="description"
        type="text"
        value={cardData.description}
      />
      <CreateCardSubmit
        type="submit"
        value="Create New Card"
        disabled={isInvalid()}
      />
    </CreateCardForm>
  );
}

export default CreateCard;
