import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../ui/Button";
import { ReactComponent as Filter } from "./../../assets/filter.svg";
import QuestionSingle from "./QuestionSingle";
import Pagenation from "../ui/Pagenation";
import usePostStore from "../../store/postStore";
import QuestionFilter from "./QuestionFilter";

function QuestionList() {
  const [page, setPage] = useState(1);
  const [fliterList, setFilterList] = useState(false);
  const { posts } = usePostStore();
  const offset = (page - 1) * 10;

  const handleFilter = () => {
    setFilterList(!fliterList);
  };

  return (
    <Container>
      <div className="title">
        <TitleTop>
          <h1>All Questions</h1>
          <Link to="ask">
            <ButtonPrimary width={"auto"} height={"auto"} padding={"10px"}>
              Ask Question
            </ButtonPrimary>
          </Link>
        </TitleTop>
        <TitleBottom>
          <div className="btns">
            <div>{posts.length} questions</div>
            <div className="filterBtn">
              <div>
                <button className="on">Newest</button>
                <button>Active</button>
                <button>Bountied</button>
                <button>Unanswered</button>
                <button>More</button>
              </div>
              <ButtonPrimary
                padding={"9px"}
                width={"auto"}
                height={"auto"}
                background={"hsl(205,46%,92%)"}
                color={"hsl(205,47%,42%)"}
                hoverbackground={"#b3d3ea"}
                onClick={handleFilter}
              >
                <Filter />
                Filter
              </ButtonPrimary>
            </div>
          </div>
          {fliterList === true ? <QuestionFilter /> : null}
        </TitleBottom>
      </div>

      <ul>
        {posts.slice(offset, offset + 10).map((post) => {
          return <QuestionSingle post={post} key={post.id} />;
        })}
      </ul>

      <Pagenation total={posts.length} page={page} setPage={setPage} />
    </Container>
  );
}

const Container = styled.section`
  width: calc(100% - 300px);
  .title {
    padding-left: 24px;
    border-bottom: 1px solid #e3e6e8;
  }
`;

const TitleTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  > h1 {
    font-size: 27px;
  }
`;

const TitleBottom = styled.div`
  .btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    .filterBtn {
      display: flex;
      gap: 16px;

      div > button {
        padding: 10px;
        color: rgb(82, 89, 96);
        background-color: #f8f9f9;
        border: 1px solid #9fa6ad;
        margin-left: -1px;
        font-size: 12px;
        cursor: pointer;

        &:first-child {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          background-color: #e3e6e8;
        }
        &:last-child {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }

      > button {
        display: flex;
        align-items: center;
        gap: 3px;
        font-size: 12px;
      }
      svg {
        fill: hsl(205, 47%, 42%);
      }
    }
  }
`;

export default QuestionList;
