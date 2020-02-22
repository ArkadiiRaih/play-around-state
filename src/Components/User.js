import React from "react";
import md5 from "md5";
import styled from "@emotion/styled";
import { colors } from "../style";

const createProfileImageUrl = ({ email }) => {
  const hash = md5(email.trim());
  return `https://www.gravatar.com/avatar/${hash}`;
};

const UserArticle = styled.article`
  border: 1px solid ${colors.listColor};
  font-size: 0.6em;
  margin-bottom: 1em;
  overflow-y: scroll;
  padding: 0.5em;
  width: 100%;
  text-align: center;
  overflow: hidden;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
const UserPicture = styled.img`
  border: 1px solid ${colors.listColor};
  margin-right: 0.5em;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
const UserInfo = styled.div``;

function User({ user }) {
  const profileImage = createProfileImageUrl(user);

  return (
    <UserArticle>
      <UserPicture src={profileImage} alt={user.name} />
      <UserInfo>
        <h2>{user.name}</h2>
      </UserInfo>
    </UserArticle>
  );
}

export default User;
