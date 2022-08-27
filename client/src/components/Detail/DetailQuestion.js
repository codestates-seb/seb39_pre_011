import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { Tag } from "./../ui/Tag";
import { ReactComponent as ArrowTop } from "./../../assets/arrowtop.svg";
import { ReactComponent as ArrowBottom } from "./../../assets/arrowbottom.svg";
import { ReactComponent as BookMark } from "./../../assets/bookmark.svg";
import { ReactComponent as Time } from "./../../assets/time.svg";

const axios = require("axios");

function DetailQuestion({ question_id }) {
  // 리덕스 쓰기전에 잠깐 테스트로 axios로 받아옴
  let [data, setData] = useState(null);
  console.log("여기");
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3001/question?question_id=${question_id}`,
    }).then((response) => {
      setData(response.data[0]);
      console.log(response.data[0]);
    });
  }, []);

  return (
    <Container>
      <div className="detail_aside">
        <ArrowTop />
        <span>10</span>
        <ArrowBottom />
        <BookMark />
        <Time />
      </div>
      <div className="detail_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
          aperiam suscipit! In beatae tempora, voluptate veritatis, tenetur
          temporibus quaerat accusamus soluta obcaecati consequuntur sequi
          laboriosam dolorum, sunt fugiat. Alias, consequatur! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Quos, aperiam suscipit! In
          beatae tempora, voluptate veritatis, tenetur temporibus quaerat
          accusamus soluta obcaecati consequuntur sequi laboriosam dolorum, sunt
          fugiat. Alias, consequatur!
        </p>
        <div className="detail_content-tags">
          <Tag className="tag">java</Tag>
          <Tag className="tag">javascript</Tag>
          <Tag className="tag">nodejs</Tag>
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
