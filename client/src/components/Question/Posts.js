import React from "react";
import styled from "styled-components";
import Post from "./Post";

function Posts() {
  // 나중에 받아올 데이터
  let users = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Container>
      <div>
        <div className="title_top">
          <h1>All Questions</h1>
          <button>Ask Question</button>
        </div>
        <div className="title_bottom">
          <div>22,919,406 questions</div>
          <div className="filterBtn">
            <div>
              <button>Newest</button>
              <button>Active</button>
              <button>Bountied</button>
              <button>Unanswered</button>
              <button>More</button>
            </div>
            <button>Filter</button>
          </div>
        </div>
      </div>

      <ul>
        {users.map((el, idx) => {
          return <Post key={idx} />;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  width: calc(100% - 300px);
  .title_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .title_bottom {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .filterBtn {
    display: flex;
    gap: 16px;
  }
`;

export default Posts;
