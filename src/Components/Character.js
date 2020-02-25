import React from "react";
import styled from "@emotion/styled";

const CharacterArticle = styled.article``;

function Character({ character }) {
  const { id, name } = character;
  return (
    <CharacterArticle>
      <a href={`https://star-wars-characters.glitch.me/api/characters/${id}`}>
        {name}
      </a>
    </CharacterArticle>
  );
}

export default Character;
