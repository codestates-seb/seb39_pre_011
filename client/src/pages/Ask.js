import React from "react";
import styled from "styled-components";
import AskForm from "../components/Ask/AskForm";
import AskAside from "../components/Ask/AskAside";

function Ask() {
  return (
    <Container>
      <div className="question-box">
        <div className="title">Ask a public question</div>
        <div className="form">
          <AskForm />
          <AskAside />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f1f2f3;

  .question-box {
    width: 1264px;
    padding: 0 24px 24px 24px;
  }
  .title {
    font-size: 27px;
    padding: 60px 0;
    background-image: url("https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368");
    background-position: right;
    background-repeat: no-repeat;
  }
  .form {
    display: flex;
  }
`;

export default Ask;
