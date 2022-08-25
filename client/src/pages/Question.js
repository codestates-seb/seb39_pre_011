import React from "react";
import styled from "styled-components";
import Posts from "../components/Question/Posts";
import Aside from "../components/Question/Aside";

function Question() {
  return (
    <Container>
      <Posts />
      <Aside />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  gap: 24px;
`;

export default Question;
