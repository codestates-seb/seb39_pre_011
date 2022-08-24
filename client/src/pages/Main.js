import React from "react";
import Title from "../components/Main/Title";
import styled from "styled-components";
import Posts from "../components/Main/Posts";

function Main() {
  return (
    <Container>
      <Title />
      <Posts />
    </Container>
  );
}

const Container = styled.main`
  width: calc(100% - 300px);
`;

export default Main;
