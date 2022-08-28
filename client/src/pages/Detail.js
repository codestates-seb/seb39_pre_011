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
  // 리덕스 쓰기전에 잠깐 테스트로 axios로 받아옴
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
      url: `http://localhost:3001/question?question_id=${question_id}`,
    })
      .then((response) => {
        setData(response.data[0]);
        console.log("첫번째");
        console.log(data);
        return axios({
          method: "get",
          url: `http://localhost:3001/user`,
        });
      })
      .then((response) => {
        console.log("두번째");
        console.log(response.data);
        console.log(response.data[0]);
        console.log(response.data[0].user_id);
        console.log(data);
        // let filtered = response.data.filter(
        //   (el) => el.user_id === data.user_id
        // );

        // console.log(filtered);
      });
  }, []);

  return (
    <Container>
      <Detailtitle data={data} />
      <div className="detail_main">
        <div className="detail_main-content">
          <DetailQuestion data={data} />
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
