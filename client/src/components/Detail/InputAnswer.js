import React from "react";
import { ButtonPrimary } from "./../ui/Button";
import { TextArea } from "./../ui/textInput";

function InputAnswer() {
  return (
    <>
      <label htmlFor="answer">Your Answer</label>
      <TextArea id="answer" />
      <div>
        <ButtonPrimary width={"auto"}>Post Your Answer</ButtonPrimary>
      </div>
    </>
  );
}

export default InputAnswer;
