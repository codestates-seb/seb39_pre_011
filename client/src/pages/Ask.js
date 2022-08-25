import React from "react";
import styled from "styled-components";
import AskForm from "../components/Ask/AskForm";
import AskHelp from "../components/Ask/AskHelp";

function Ask() {
  return (
    <Container>
      <div className="question-box">
        <div className="title">Ask a public question</div>
        <div className="form">
          <AskForm />
          <AskHelp />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  .question-box {
    width: 1264px;
    padding: 0 24px 24px 24px;
  }
  .title {
    font-size: 27px;
    padding: 60px 0;
  }
  .form {
    display: flex;
  }
`;

export default Ask;
