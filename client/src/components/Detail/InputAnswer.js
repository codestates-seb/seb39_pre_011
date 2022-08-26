import React from "react";
import styled from "styled-components";

function InputAnswer() {
  return (
    <Container>
      <label htmlFor="answer">Your Answer</label>
      <textarea id="answer" />
      <button>Post Your Answer</button>
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
