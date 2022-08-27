import React from "react";
import styled from "styled-components";

function User() {
  return (
    <Container>
      <img src="" alt=" " />
      <div className="info">
        <div>kimcoding</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  padding: 7px;

  img {
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid gray;
    border-radius: 3px;
  }

  .info {
    float: left;
    margin-left: 10px;
  }

  div {
    color: #0074cc;
    font-size: 15px;
  }
`;

export default User;
