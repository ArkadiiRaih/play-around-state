import React, { useState } from "react";
import styled from "@emotion/styled";

const CreateUserForm = styled.form``;

function CreateUser({ onCreateUser }) {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleSubmit = event => {
    event.preventDefault();
    if (onCreateUser) onCreateUser(userData);
    setUserData({ name: "", email: "" });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(userData => ({ ...userData, [name]: value }));
  };

  const isValid = () => {
    const { name, email } = userData;
    return name && email;
  };

  const isInvalid = () => {
    return !isValid();
  };

  return (
    <CreateUserForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input type="submit" value="Create User" disabled={isInvalid()} />
    </CreateUserForm>
  );
}

export default CreateUser;
