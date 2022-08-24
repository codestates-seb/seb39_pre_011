import React from "react";
import styled from "styled-components";

function Ask() {
  return (
    <Container>
      <div>Ask a public question</div>
      <div className="ask-box">
        <div className="background">
          <div className="input">
            <label>
              Title
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
            </label>
            <input type="text" />
          </div>
        </div>
        <aside></aside>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default Ask;
