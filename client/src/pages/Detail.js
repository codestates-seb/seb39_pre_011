import React from "react";
import styled from "styled-components";
import DetailQuestion from "../components/Detail/DetailQuestion";
import Answer from "../components/Detail/Answer";
import DetailAside from "../components/Detail/DetailAside";
import InputAnswer from "../components/Detail/InputAnswer";

function Detail() {
  return (
    <Container>
      <div className="detail_box">
        <DetailQuestion />
        <div>12 Answer</div>
        <Answer />
        <InputAnswer />
      </div>
      <DetailAside />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;
  gap: 24px;

  .detail_box {
    width: calc(100% - 300px);
  }
`;

export default Detail;
