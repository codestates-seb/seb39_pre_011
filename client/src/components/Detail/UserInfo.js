import React from "react";
import styled from "styled-components";

function UserInfo() {
  return (
    <Container>
      <div className="askedTime">asked 8 mins ago</div>
      <img src="" alt="" />
      <div className="userName">kimcoding</div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e1ecf4;
  font-size: 12px;
  padding: 7px;

  .askedTime {
    margin-bottom: 4px;
    color: #6a737c;
  }

  > img {
    float: left;
    margin-right: 5px;
    width: 32px;
    height: 32px;
    border: 1px solid red;
  }

  .userName {
    color: #0074cc;
  }
`;

export default UserInfo;
