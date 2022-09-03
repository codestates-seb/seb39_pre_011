import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { updatePostData } from "../../api/postApi";
import { readUserData } from "../../api/userApi";
import { readParamsPostData } from "../../api/postApi";
import { readParamsAnswerData } from "../../api/answerApi";

function QuestionSingle({ post }) {
  const [user, setUser] = useState({});
  const [ask, setAsk] = useState([]);
  const [postAnswer, setPostAnswer] = useState([]);

  const handleView = () => {
    let clickView = post.view;
    clickView++;
    let postView = { ...post, ...{ view: clickView } };
    updatePostData(post.id, postView);
  };

  useEffect(() => {
    readUserData(post.user_id).then((response) => setUser(response.data));
    readParamsPostData({ user_id: post.user_id }).then((response) => {
      setAsk(response.data);
    });
    readParamsAnswerData({ question_id: post.id }).then((response) =>
      setPostAnswer(response.data)
    );
  }, []);

  return (
    <Li>
      <State>
        <div>
          <span>{post.vote}</span>
          <span> votes</span>
        </div>
        <div className="font_color">
          <span>{postAnswer.length}</span>
          <span> answers</span>
        </div>
        <div className="font_color">
          <span>{post.view}</span>
          <span> views</span>
        </div>
      </State>
      <Content>
        <h3>
          <Link
            to={`/detail/${post.id}`}
            onClick={() => {
              handleView();
              window.scrollTo(0, 0);
            }}
          >
            {post.title}
          </Link>
        </h3>
        <p>{post.body}</p>
        <div className="content-info">
          <div className="content-info-tags">
            {post.tags.map((el, idx) => (
              <Tag key={idx}>{el}</Tag>
            ))}
          </div>
          <UserInfo>
            <a href="/">
              <img src="#" alt=" "></img>
            </a>
            <a href="/">{user.name}</a>
            <span className="bold">{ask.length}</span>
            <span>asked</span>
            <time>39 sec ago</time>
          </UserInfo>
        </div>
      </Content>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  border-bottom: 1px solid #e3e6e8;
  padding: 16px;
  font-size: 13px;
`;

const State = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 100px;
  flex-shrink: 0;
  margin-right: 16px;

  .font_color {
    color: rgb(106, 115, 124);
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-size: 17px;
    a {
      color: #0074cc;
    }
  }

  p {
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content-info {
    display: flex;
    justify-content: space-between;
  }

  .content-info-tags {
    display: flex;
    gap: 4px;
  }
`;

const UserInfo = styled.div`
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

  .bold {
    color: rgb(82, 89, 96);
    font-weight: 700;
  }
`;

export default QuestionSingle;
