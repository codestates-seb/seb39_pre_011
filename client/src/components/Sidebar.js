import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container>
      <Link to="/">
        <div className="on">Question</div>
      </Link>
      <Link to="/tags">
        <div>Tags</div>
      </Link>
      <Link to="/users">
        <div>Users</div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 160px;
  margin-top: 80px;
  border-right: 1px solid #e3e6e8;
  font-size: 13px;

  display: flex;
  flex-direction: column;

  div {
    padding: 8px;
  }

  .on {
    background-color: #f1f2f3;
    border-right: 3px solid #f48225;
    font-weight: 700;
  }
`;

export default Sidebar;
