import React from "react";
import styled from "styled-components";
import Posts from "../components/Questions/Posts";
import QuestionAside from "../components/Questions/QuestionAside";

function Questions() {
  return (
    <Container>
      <Posts />
      <QuestionAside />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px 24px 24px 0;
  display: flex;
  gap: 24px;
`;

export default Questions;
