import React from "react";
import styled from "styled-components";

function DetailAside() {
  return (
    <Container>
      <div className="aside_box">
        <div>
          <div className="aside_title">The Overflow Blog</div>
          <div className="aside_content">
            <div>🖊 Why AI is having an on-prem moment (Ep. 476)</div>
            <div>🖊 Open source and accidental innovation</div>
          </div>
        </div>
        <div>
          <div className="aside_title">The Overflow Blog</div>
          <div className="aside_content">
            <div>
              🗨 Recent site instability, major outages – July/August 2022
            </div>
            <div>🗨 Please welcome Valued Associate #1301 - Emerson</div>
            <div>The [maintenance] tag is being burninated</div>
            <div>Staging Ground Workflow: Question Lifecycle</div>
            <div>What should we do with improperly cited posts?</div>
          </div>
        </div>
        <div>
          <div className="aside_title">The Overflow Blog</div>
          <div className="aside_content">
            <div>How should we clean up the [kickstarter] tag?</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  .aside_box {
    display: flex;
    flex-direction: column;
    width: 300px;

    border: 1px solid beige;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .aside_title {
    padding: 12px 15px;
    background-color: beige;
    border-bottom: 1px solid beige;
    font-size: 12px;
  }

  .aside_content {
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
  }
`;

export default DetailAside;
