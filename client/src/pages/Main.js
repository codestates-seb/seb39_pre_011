import React from "react";
import Title from "../components/Main/Title";
import styled from "styled-components";
import Questions from "../components/Main/Questions";

function Main() {
  return (
    <Container>
      <Title />
      <Questions />
    </Container>
  );
}

const Container = styled.main``;

export default Main;
