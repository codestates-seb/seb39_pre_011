import React from "react";
import styled from "styled-components";
import { TextInput } from "./../ui/textInput";

function UserTtile() {
  return (
    <Container>
      <h1>Users</h1>
      <div className="interface">
        <TextInput placeholder="Filter by user" width={"200px"} />
        <div className="filterBtn">
          <button>Reputation</button>
          <button>New users</button>
          <button>Voters</button>
          <button>Editors</button>
          <button>Moderator</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 27px;
    margin-bottom: 24px;
  }
  .interface {
    display: flex;
    justify-content: space-between;
  }

  .filterBtn {
    button {
      padding: 10px;
      color: rgb(82, 89, 96);
      background-color: #f8f9f9;
      border: 1px solid #9fa6ad;
      margin-left: -1px;
      font-size: 12px;
      cursor: pointer;

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }
  }
`;

export default UserTtile;
