import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Detailtitle from "../components/Detail/Detailtitle";
import DetailQuestion from "../components/Detail/DetailQuestion";
import DetailAside from "../components/Detail/DetailAside";
import Answer from "../components/Detail/Answer";
import InputAnswer from "../components/Detail/InputAnswer";

function Detail() {
  const { question_id } = useParams();

  return (
    <Container>
      <Detailtitle />
      <div className="detail_main">
        <div className="detail_main-content">
          <DetailQuestion question_id={question_id} />
          <div className="answer_count">2 Answer</div>
          <Answer />
          <InputAnswer />
        </div>
        <DetailAside />
      </div>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;

  .answer_count {
    font-size: 19px;
    color: #232629;
  }
  .detail_main {
    display: flex;
    gap: 24px;
  }
  .detail_main-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default Detail;
