import React from "react";
import styled from "styled-components";

function Users() {
  return <Container>User</Container>;
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  gap: 24px;
  border: 1px solid red;
`;

export default Users;
