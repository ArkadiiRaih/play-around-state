import React from "react";
import CreateUser from "./CreateUser";
import User from "./User";
import styled from "@emotion/styled";

const UserSection = styled.section``;

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
