import React from "react";
import md5 from "md5";
import styled from "@emotion/styled";

const createProfileImageUrl = ({ email }) => {
  const hash = md5(email.trim());
  return `https://www.gravatar.com/avatar/${hash}`;
};

const UserArticle = styled.article``;
const UserPicture = styled.img``;
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
