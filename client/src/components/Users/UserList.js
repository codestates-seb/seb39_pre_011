import React from "react";
import styled from "styled-components";
import User from "./User";

function UserList() {
  const users = [];

  for (let i = 0; i < 22; i++) {
    users.push("1");
  }

  return (
    <Container>
      {users.map((_, idx) => {
        return <User key={idx} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  gap: 12px;
`;

export default UserList;
