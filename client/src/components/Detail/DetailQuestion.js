import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tag } from "./../ui/Tag";
import { ButtonPrimary } from "./../ui/Button";

function DetailQuestion() {
  return (
    <Container>
      <div>
        <div className="detail_title">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
            vel?
          </h1>
          <Link to="/ask">
            <ButtonPrimary width={"auto"}>Ask Question</ButtonPrimary>
          </Link>
        </div>
        <div className="detail_info">
          <div>
            <span>Asked</span> 5 years ago
          </div>
          <div>
            <span>Modified</span> today
          </div>
          <div>
            <span>Viewed</span> 3k times
          </div>
        </div>
      </div>
      <div className="detail_content">
        <div className="detail_content-aside">
          <button>🔼</button>
          <span>10</span>
          <button>🔽</button>
          <button>👍</button>
          <span>3</span>
        </div>
        <div className="detail_content-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
            aperiam suscipit! In beatae tempora, voluptate veritatis, tenetur
            temporibus quaerat accusamus soluta obcaecati consequuntur sequi
            laboriosam dolorum, sunt fugiat. Alias, consequatur!
          </p>
          <div>
            <Tag>java</Tag>
            <Tag>javascript</Tag>
            <Tag>nodejs</Tag>
          </div>
          <div>
            <button>Share</button>
            <button>Edit</button>
            <button>Follow</button>
          </div>
          <div>글쓴이 정보</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .detail_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .detail_info {
    display: flex;
    gap: 16px;
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid gray;
  }
  .detail_content {
    width: 100%;
    height: 300px;
    border: 1px solid red;

    display: flex;
    gap: 16px;

    > .detail_content-aside {
      width: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    > .detail_content-main {
      width: calc(100% - 50px);
    }
  }
`;

export default DetailQuestion;
