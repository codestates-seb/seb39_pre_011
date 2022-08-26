import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Post() {
  return (
    <Container>
      <div className="post_state">
        <div>
          <span>0</span>
          <span> votes</span>
        </div>
        <div className="font_color">
          <span>0</span>
          <span> answers</span>
        </div>
        <div className="font_color">
          <span>0</span>
          <span> views</span>
        </div>
      </div>
      <div className="post_content">
        <h3>
          <Link to="/detail">Lorem ipsum dolor sit amet.</Link>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          eaque ipsa vitae molestiae a libero suscipit ad, velit culpa
          reprehenderit quae autem fugiat. Consectetur unde nihil deleniti,
          consequatur quasi voluptatibus.
        </p>
        <div className="post_content-info">
          <div className="post_content-info-tags">
            <a href="#">tag</a>
            <a href="#">tag</a>
            <a href="#">tag</a>
          </div>
          <div className="post_content-info-user">
            <a href="#">
              <img src="#" alt="."></img>
            </a>
            <a href="#">kimcoding</a>
            <span>3</span>
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
  border-bottom: 1px solid #e3e6e8;
  padding: 16px;
  font-size: 13px;

  h3 {
    font-size: 17px;
    a {
      color: #0074cc;
    }
  }
  .post_state {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    width: 300px;
    margin-right: 16px;
  }
  .post_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .post_content-info {
    display: flex;
    justify-content: space-between;
  }

  .post_content-info-tags {
    display: flex;
    gap: 4px;

    a {
      color: #39739d;
      background-color: #e1ecf4;
      padding: 4px 6px;
      border-radius: 3px;
    }
  }

  .post_content-info-user {
    display: flex;
    gap: 4px;
    font-size: 12px;

    a {
      color: #0a95ff;
    }

    > span,
    time {
      color: rgb(106, 115, 124);
    }
  }

  .font_color {
    color: rgb(106, 115, 124);
  }
`;

export default Post;
