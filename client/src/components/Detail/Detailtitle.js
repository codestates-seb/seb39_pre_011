import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../ui/Button";

function Detailtitle({ data }) {
  return (
    <Container>
      <div className="detail_title">
        <h1>{data.title}</h1>
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
          <span>Viewed</span> {data.view} times
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 27px;
    color: rgb(59, 64, 69);
  }
  .detail_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .detail_info {
    display: flex;
    gap: 16px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e3e6e8;
    font-size: 13px;

    span {
      color: rgb(106, 115, 124);
    }
  }
`;

export default Detailtitle;
