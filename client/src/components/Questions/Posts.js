import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Post from "./Post";

const axios = require("axios");

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/question",
    }).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="title">
        <div className="title_top">
          <h1>All Questions</h1>
          <Link to="ask">
            <button>Ask Question</button>
          </Link>
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
        {posts.map((post) => {
          return <Post post={post} key={post.question_id} />;
        })}
      </ul>

      <div className="pagenation">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span>...</span>
        <button>100</button>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: calc(100% - 300px);
  .title {
    padding-left: 24px;
    border-bottom: 1px solid #e3e6e8;

    h1 {
      font-size: 27px;
    }
  }
  .title_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    button {
      padding: 10px;
      font-size: 13px;
      background-color: #0074cc;
      border: 1px solid #ffffff;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      cursor: pointer;
    }
  }
  .title_bottom {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .filterBtn {
    display: flex;
    gap: 16px;

    div > button {
      padding: 10px;
      color: rgb(82, 89, 96);
      background-color: #f8f9f9;
      border: 1px solid #9fa6ad;
      margin-left: -1px;
      cursor: pointer;

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    > button {
      background-color: #b3d3ea;
      border: 1px solid #7aa7ce;
      border-radius: 3px;
      padding: 10px;
      color: rgb(44, 88, 199);
      font-size: 12px;
    }
  }
  .pagenation {
    margin-top: 50px;
    padding-left: 24px;

    button {
      padding: 8px;
      border: 1px solid #babfc4;
      border-radius: 3px;
      background-color: #ffffff;
      margin-right: 5px;

      &:hover {
        background-color: #d6d9dc;
      }

      &:first-child {
        background-color: #f48225;
        color: #ffffff;
        border: 1px solid #ffffff;
      }
    }
  }
`;

export default Posts;
