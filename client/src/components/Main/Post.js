import React from "react";
import styled from "styled-components";

function Post() {
  return (
    <Container>
      <div className="post_state">
        <div>
          <span>0</span>
          <span> votes</span>
        </div>
        <div>
          <span>0</span>
          <span> answers</span>
        </div>
        <div>
          <span>0</span>
          <span> views</span>
        </div>
      </div>
      <div className="post_content">
        <h3>
          <a href="#">제목</a>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          eaque ipsa vitae molestiae a libero suscipit ad, velit culpa
          reprehenderit quae autem fugiat. Consectetur unde nihil deleniti,
          consequatur quasi voluptatibus.
        </p>
        <div className="post_content-info">
          <div className="post_content-info-tags">
            <a href="#">태그</a>
            <a href="#">태그</a>
            <a href="#">태그</a>
          </div>
          <div className="post_content-info-user">
            <a href="#">
              <img src="#" alt="img"></img>
            </a>
            <a href="#">아이디</a>
            <span>답변수</span>
            <span>aksed</span>
            <time>39 sec ago</time>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  border-top: 1px solid black;
  padding: 16px;

  .post_state {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    width: 200px;
    margin-right: 16px;
  }

  .post_content-info {
    display: flex;
    justify-content: space-between;
  }

  .post_content-info-tags {
    display: flex;
    gap: 4px;
  }

  .post_content-info-user {
    display: flex;
    gap: 4px;
    font-size: 12px;
  }
`;

export default Post;
