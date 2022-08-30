import React, { useState } from "react";
import { ButtonPrimary } from "../ui/Button";
import { TextArea } from "./../ui/textInput";

function InputAnswer() {
  const [answerInput, setAnswerInput] = useState("");

  const handleAnswerChange = (e) => {
    setAnswerInput(e.target.value);
  };

  const handleSubmit = () => {
    const date = new Date();
    const answerData = {
      answer: answerInput,
      createAt: date.toLocaleString("ko-kr"),
    };
    console.log(answerData);
  };

  return (
    <>
      <label htmlFor="answer">Your Answer</label>
      <TextArea
        id="answer"
        name="answer"
        onChange={(e) => handleAnswerChange(e)}
      />
      <div>
        <ButtonPrimary width={"auto"} onClick={handleSubmit}>
          Post Your Answer
        </ButtonPrimary>
      </div>
    </>
  );
}
export default InputAnswer;
