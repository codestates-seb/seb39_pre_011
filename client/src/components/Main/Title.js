import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Title() {
  // 나중에 받아올 데이터
  let questions = { count: "22,919,406" };

  return (
    <Container>
      <div className="main_head">
        <h1>All Questions</h1>
        <Link to="/ask">
          <button>Ask Question</button>
        </Link>
      </div>
      <div className="main_data">
        <div>{questions.count} questions</div>
        <div className="main_data-filter">
          <div className="main_data-filter-btns">
            <a href="#">Newest</a>
            <a href="#">Active</a>
            <a href="#">Bountied</a>
            <a href="#">Unanswerd</a>
            <a href="#">More</a>
          </div>
          <button>Filter</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .main_head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .main_data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .main_data-filter {
    display: flex;
    gap: 16px;
  }
  .main_data-filter-btns a {
    padding: 5px;
    border: 1px solid red;
  }
`;

export default Title;
