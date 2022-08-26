import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "./../ui/Button";

function InputAnswer() {
  return (
    <Container>
      <label htmlFor="answer">Your Answer</label>
      <textarea id="answer" />
      <ButtonPrimary width={"auto"}>Post Your Answer</ButtonPrimary>
    </Container>
  );
}

const Container = styled.div`
  textarea {
    width: 100%;
    resize: none;
  }
`;

export default InputAnswer;
