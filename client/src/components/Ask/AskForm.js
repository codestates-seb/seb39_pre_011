import React, { useState } from "react";
import styled from "styled-components";
import { TagsInput } from "./TagsInput";

function AskForm() {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    console.log(body);
  };

  return (
    <Container>
      <div className="input_bgc">
        <div className="input_title">
          <label htmlFor="title">
            Title
            <p>
              Be specific and imagine you’re asking a question to another person
            </p>
          </label>
          <input
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector"
            id="title"
            name="title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="input_body">
          <label htmlFor="body">
            Body
            <p>
              Include all the information someone would need to answer your
              question
            </p>
          </label>
          <textarea
            id="body"
            name="body"
            onChange={handleBodyChange}
          ></textarea>
        </div>
        <div className="input_tag">
          <label htmlFor="tag">
            Tags
            <p>Add up to 5 tags to describe what your question is about</p>
          </label>
          <TagsInput />
        </div>
      </div>
      <button>Review your question</button>
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;

  .input_bgc {
    padding: 16px;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
  }
  label {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;

    > P {
      font-size: 12px;
      margin: 5px 0;
      font-weight: 400;
    }
  }
  .input_title input {
    padding: 7px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    width: 100%;
    &:focus {
      outline: 1px solid #59a4de;
    }
  }
  textarea {
    border: 1px solid #babfc4;
    border-radius: 3px;
    width: 100%;
    height: 200px;
    resize: none;
    padding: 10px;

    &:focus {
      outline: 1px solid #59a4de;
    }
  }
  button {
    margin-top: 32px;
    padding: 10px;
    font-size: 13px;
    background-color: #0074cc;
    border: 1px solid #ffffff;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export default AskForm;
