import React from "react";
import styled from "styled-components";
import Question from "./Question";

function Questions() {
  // 나중에 받아올 데이터
  let users = [{}, {}, {}];

  return (
    <Container>
      {users.map((el) => {
        return <Question />;
      })}
    </Container>
  );
}

const Container = styled.ul``;

export default Questions;
