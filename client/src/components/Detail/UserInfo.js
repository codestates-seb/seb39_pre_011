import React from "react";
import styled from "styled-components";
import useUserStore from "../../store/userStore";

function UserInfo() {
  const { singleUser } = useUserStore();
  // console.log(singleUser);
  return (
    <Container>
      <div className="askedTime">asked 8 mins ago</div>
      <img src="" alt="" />
      <div className="userName">{singleUser.name}</div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e1ecf4;
  width: 200px;
  font-size: 12px;
  padding: 7px;
  border-radius: 3px;

  .askedTime {
    margin-bottom: 7px;
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
