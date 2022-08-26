import React from "react";
import styled from "styled-components";

function AskHelp() {
  return (
    <Container>
      <div className="help">
        <div className="help_title">Step 1: Draft your question</div>
        <div className="help_content">
          <div>🔍</div>
          <div>Watch tags to curate your list of questions.</div>
        </div>
      </div>
      <div className="help">
        <div className="help_title">Have a non-programming question?</div>
        <div className="help_content">
          <div>🔍</div>
          <div>Watch tags to curate your list of questions.</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  width: 320px;
  margin-left: 24px;

  .help {
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    margin-bottom: 30px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    .help_title {
      padding: 12px 15px;
      border-bottom: 1px solid #d6d9dc;
      color: #525960;
      font-size: 15px;
    }
    .help_content {
      font-size: 13px;
      background-color: #f8f9f9;
      padding: 15px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
    }
  }
`;

export default AskHelp;
