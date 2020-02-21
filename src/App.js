import React from "react";
import styled from "@emotion/styled";
import Users from "./Users";
import List from "./List";
import CreateList from "./CreateList";

const Main = styled.main``;

function App() {
  return (
    <Main>
      <Users></Users>
      <section>
        <CreateList />
        <List />
      </section>
    </Main>
  );
}

export default App;
