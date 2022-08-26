import React from "react";
import styled from "styled-components";

function Answer() {
  return (
    <Container>
      <div className="answer_content">
        <div className="answer_content-aside">
          <button>🔼</button>
          <span>10</span>
          <button>🔽</button>
          <button>👍</button>
          <span>3</span>
        </div>
        <div className="answer_content-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
            aperiam suscipit! In beatae tempora, voluptate veritatis, tenetur
            temporibus quaerat accusamus soluta obcaecati consequuntur sequi
            laboriosam dolorum, sunt fugiat. Alias, consequatur!
          </p>
          <div>
            <span>java</span>
            <span>javascript</span>
            <span>nodejs</span>
          </div>
          <div>
            <button>Share</button>
            <button>Edit</button>
            <button>Follow</button>
          </div>
          <div>답변 작성자 정보</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border: 1px solid red;

  .answer_content {
    width: 100%;
    height: 300px;
    border: 1px solid red;

    display: flex;
    gap: 16px;

    > .answer_content-aside {
      width: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    > .answer_content-main {
      width: calc(100% - 50px);
    }
  }
`;

export default Answer;
