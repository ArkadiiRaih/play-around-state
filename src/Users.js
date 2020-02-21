import React from "react";
import CreateUser from "./CreateUser";
import User from "./User";
import styled from "@emotion/styled";
import { colors, boxShadow, darken } from "./style";

const UserSection = styled.section`
  background-color: ${colors.cardColor};
  border: 1px solid ${darken(colors.cardColor, 10)};
  height: 100%;
  margin-right: 1em;
  min-width: 300px;
  padding: 1em;
  width: 300px;
  ${boxShadow}
  h2 {
    border-bottom: 5px solid ${darken(colors.cardColor, 10)};
    color: ${darken(colors.cardColor, 70)};
    display: block;
    margin-top: 0;
    padding-bottom: 0.5em;
    text-align: center;
  }
`;

function Users({ users = [] }) {
  return (
    <UserSection>
      <h2>Users</h2>
      <CreateUser />
      {users.map(user => (
        <User />
      ))}
    </UserSection>
  );
}

export default Users;
