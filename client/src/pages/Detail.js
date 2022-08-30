import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Detailtitle from "../components/Detail/Detailtitle";
import DetailQuestion from "../components/Detail/DetailQuestion";
import DetailAside from "../components/Detail/DetailAside";
import Answer from "../components/Detail/Answer";
import InputAnswer from "../components/Detail/InputAnswer";

const axios = require("axios");

function Detail() {
  const { question_id } = useParams();

  const dummy = {
    question_id: null,
    user_id: "",
    title: "",
    body: "",
    tags: [],
    created_at: "",
    updated_at: "",
    vote: null,
    view: null,
  };
  const [data, setData] = useState(dummy);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/question",
      params: { question_id: question_id },
    }).then((response) => {
      setData(response.data[0]);
    });
  }, [question_id]);

  return (
    <Container>
      <Detailtitle data={data} />
      <div className="detail_main">
        <div className="detail_main-content">
          <DetailQuestion data={data} setData={setData} />
          <div className="answer_count">2 Answer</div>
          <Answer />
          <InputAnswer />
        </div>
        <DetailAside />
      </div>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;

  .answer_count {
    font-size: 19px;
    color: #232629;
  }
  .detail_main {
    display: flex;
    gap: 24px;
  }
  .detail_main-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default Detail;
