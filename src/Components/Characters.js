import React from "react";
import { connect } from "react-redux";

import styled from "@emotion/styled";
import Character from "./Character";

const CharacrestSection = styled.section``;

function Characters({ characters = [] }) {
  return (
    <CharacrestSection>
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </CharacrestSection>
  );
}

export default connect(({ characters }) => ({ characters }))(Characters);
