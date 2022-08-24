import React from "react";
import styled from "styled-components";

function Title() {
  // 나중에 받아올 데이터
  let questions = { count: "22,919,406" };

  return (
    <Container>
      <div>
        <h1>All Questions</h1>
        <button>Ask Question</button>
      </div>
      <div>
        <div>{questions.count} questions</div>
        <div>
          <div>버튼들</div>
          <div>Filter</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default Title;
