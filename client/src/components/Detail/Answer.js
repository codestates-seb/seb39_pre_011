import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { ReactComponent as ArrowTop } from "./../../assets/arrowtop.svg";
import { ReactComponent as ArrowBottom } from "./../../assets/arrowbottom.svg";
import { ReactComponent as BookMark } from "./../../assets/bookmark.svg";
import { ReactComponent as Time } from "./../../assets/time.svg";

function Answer({ answer }) {
  return (
    <Container>
      <div className="detail_aside">
        <ArrowTop />
        <span>{answer.vote}</span>
        <ArrowBottom />
        <BookMark />
        <Time />
      </div>
      <div className="detail_content">
        <p>{answer.content}</p>
        <div className="detail_content-footer">
          <div>
            <button>Share</button>
            <button>Edit</button>
            <button>Follow</button>
          </div>
          <UserInfo />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #e3e6e8;

  svg {
    cursor: pointer;
    fill: rgb(186, 191, 196);
  }

  button {
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    color: rgb(131, 140, 149);
    margin: 5px;
  }

  > .detail_aside {
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  > .detail_content {
    width: calc(100% - 50px);

    > p {
      font-size: 15px;
      color: #232629;
      line-height: 22.5px;
    }

    > .detail_content-footer {
      margin: 24px 0 12px 0;
      display: flex;
      justify-content: space-between;

      button {
        font-size: 13px;
      }
    }
  }
`;
export default Answer;
