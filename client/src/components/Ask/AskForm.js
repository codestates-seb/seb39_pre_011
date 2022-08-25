import React from "react";
import styled from "styled-components";

function AskForm() {
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
          <textarea id="body"></textarea>
        </div>
        <div className="input_tag">
          <label htmlFor="tag">
            Tags
            <p>Add up to 5 tags to describe what your question is about</p>
          </label>
          <input type="text" placeholder="e.g. (iphone android sql)" id="tag" />
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
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  label {
    cursor: pointer;
  }
  input {
    padding: 7px;
    border-radius: 3px;
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 200px;
    resize: none;
    padding: 10px;
  }
  button {
    margin-top: 32px;
  }
`;

export default AskForm;
