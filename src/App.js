import React from "react";
import styled from "@emotion/styled";
import Users from "./Users";
import List from "./List";
import CreateList from "./CreateList";
import { Global } from "@emotion/core";
import { globalStyles } from "./style";

const Main = styled.main`
  display: flex;
  margin: 0.5em;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Main>
        <Users></Users>
        <section>
          <CreateList />
          <List />
        </section>
      </Main>
    </>
  );
}

export default App;
