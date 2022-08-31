import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Detailtitle from "../components/Detail/Detailtitle";
import DetailPage from "../components/Detail/DetailPage";
import DetailAside from "../components/Detail/DetailAside";
import Answer from "../components/Detail/Answer";
import InputAnswer from "../components/Detail/InputAnswer";
import { readPostData } from "../api/postApi";
import { readParamsAnswerData } from "../api/answerApi";
import usePostStore from "../store/postStore";
import useAnswerStore from "../store/answerStore";

function Detail() {
  const { question_id } = useParams();

  const { setSinglePost } = usePostStore();
  const { questionAnswer: answers, setQuestionAnswer } = useAnswerStore();

  useEffect(() => {
    readPostData(question_id).then((response) => setSinglePost(response.data));

    readParamsAnswerData({ question_id: question_id }).then((response) =>
      setQuestionAnswer(response.data)
    );
  }, []);

  return (
    <Container>
      <Detailtitle />
      <div className="detail_main">
        <div className="detail_main-content">
          <DetailPage />
          <div className="answer_count">{answers.length} Answer</div>
          {answers.map((el) => (
            <Answer answer={el} key={el.id} />
          ))}
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default Detail;
