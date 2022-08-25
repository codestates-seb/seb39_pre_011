import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container>
      <Link to="/">Question</Link>
      <Link to="/tags">Tags</Link>
      <Link to="/users">Users</Link>
    </Container>
  );
}

const Container = styled.div`
  width: 160px;
  height: 500px;
  padding-top: 24px;

  display: flex;
  flex-direction: column;
`;

export default Sidebar;
