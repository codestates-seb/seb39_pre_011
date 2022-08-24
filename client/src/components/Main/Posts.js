import React from "react";
import styled from "styled-components";
import Post from "./Post";

function Posts() {
  // 나중에 받아올 데이터
  let users = [{}, {}, {}];

  return (
    <Container>
      {users.map((el, idx) => {
        return <Post key={idx} />;
      })}
    </Container>
  );
}

const Container = styled.ul``;

export default Posts;
