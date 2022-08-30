import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { Tag } from "./../ui/Tag";
import { ReactComponent as ArrowTop } from "./../../assets/arrowtop.svg";
import { ReactComponent as ArrowBottom } from "./../../assets/arrowbottom.svg";
import { ReactComponent as BookMark } from "./../../assets/bookmark.svg";
import { ReactComponent as Time } from "./../../assets/time.svg";

function DetailQuestion({ data, setData }) {
  const handleUp = () => {
    // let count = data.vote;
    // count++;
    // setData(count);
  };
  const handleDown = () => {};
  return (
    <Container>
      <div className="detail_aside">
        <ArrowTop onClick={handleUp} />
        <span>{data.vote}</span>
        <ArrowBottom onClick={handleDown} />
        <BookMark />
        <Time />
      </div>
      <div className="detail_content">
        <p>{data.body}</p>
        <div className="detail_content-tags">
          {data.tags.map((el, idx) => (
            <Tag className="tag" key={idx}>
              {el}
            </Tag>
          ))}
        </div>
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

    > .detail_content-tags {
      .tag {
        margin-right: 3px;
      }
      margin: 24px 0 12px 0;
    }
    > .detail_content-footer {
      display: flex;
      justify-content: space-between;

      button {
        font-size: 13px;
      }
    }
  }
`;

export default DetailQuestion;
