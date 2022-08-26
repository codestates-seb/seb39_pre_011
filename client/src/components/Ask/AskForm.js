import React, { useState } from "react";
import styled from "styled-components";
import { TagsInput } from "./TagsInput";
import { TextArea, TextInput } from "./../ui/textInput";

function AskForm() {
  const initialTags = [];
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(initialTags);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    console.log(body);
  };

  const handleSubmit = () => {
    const date = new Date();
    const askData = {
      title: title,
      body: body,
      tags: tags,
      vote: 0,
      view: 0,
      answer: [],
      createAt: date.toLocaleString("ko-kr"),
    };
    console.log(askData);
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
          <TextInput
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
          <TextArea id="body" name="body" onChange={handleBodyChange} />
        </div>
        <div className="input_tag">
          <label htmlFor="tag">
            Tags
            <p>Add up to 5 tags to describe what your question is about</p>
          </label>
          <TagsInput tags={tags} setTags={setTags} />
        </div>
      </div>
      <button onClick={handleSubmit}>Review your question</button>
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
