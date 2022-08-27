import React from "react";
import styled from "styled-components";

import UserTtile from "../components/Users/UserTtile";
import UserList from "../components/Users/UserList";

function Users() {
  return (
    <Container>
      <UserTtile />
      <UserList />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export default Users;
