import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";

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
            <Tag>tag</Tag>
            <Tag>tag</Tag>
            <Tag>tag</Tag>
          </div>
          <div className="post_content-info-user">
            <a href="/">
              <img src="#" alt=" "></img>
            </a>
            <a href="/">kimcoding</a>
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
    width: 250px;
    margin-right: 16px;
  }
  .post_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
    align-items: center;
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
