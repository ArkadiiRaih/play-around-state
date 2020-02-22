import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { globalStyles } from "../style";
import ListsContainer from "../containers/ListsContainer";
import CreateListContainer from "../containers/CreateListContainer";
import UsersContainer from "../containers/UsersContainer";

const Main = styled.main`
  display: flex;
  margin: 0.5em;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Main>
        <UsersContainer />
        <section>
          <CreateListContainer />
          <ListsContainer />
        </section>
      </Main>
    </>
  );
}

export default App;
