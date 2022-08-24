import React from "react";
import styled from "styled-components";

function Question() {
  return (
    <Container>
      <div>
        <div>0 votes</div>
        <div>0 answers</div>
        <div>0 views</div>
      </div>
      <div>
        <h2>제목</h2>
        <p>title</p>
        <div>
          <div>
            <span>태그1</span>
            <span>태그2</span>
            <span>태그3</span>
          </div>
          <div>
            <span>아이디</span>
            <span>답변수</span>
            <span>aksed</span>
            <span>39 sec ago</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.li``;

export default Question;
