import React from "react";
import styled from "styled-components";

function User({ user }) {
  return (
    <Container>
      <img src={user.profile_photo} alt=" " />
      <div className="info">
        <div>{user.name}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  padding: 7px;
  display: flex;
  gap: 10px;

  img {
    min-width: 48px;
    max-width: 48px;
    height: 48px;
    border: 1px solid gray;
    border-radius: 3px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  div {
    color: #0074cc;
    font-size: 15px;
  }
`;

export default User;
