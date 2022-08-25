import React from "react";
import styled from "styled-components";

function User() {
  return <Container>User</Container>;
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  gap: 24px;
`;

export default User;
