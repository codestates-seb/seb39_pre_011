import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon1 } from "../assets/signup/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/signup/icon2.svg";
import { ReactComponent as Icon3 } from "../assets/signup/icon3.svg";
import { ReactComponent as Icon4 } from "../assets/signup/icon4.svg";

function SignUp() {
  return (
    <Container>
      <LeftBox>
        <h1>Join the Stack Overflow community</h1>
        <InnerBox>
          <Icon1 />
          Get unstuck — ask a question
        </InnerBox>

        <InnerBox>
          <Icon2 />
          Unlock new privileges like voting and commenting
        </InnerBox>

        <InnerBox>
          <Icon3 />
          Save your favorite tags, filters, and jobs
        </InnerBox>

        <InnerBox>
          <Icon4 />
          Earn reputation and badges
        </InnerBox>
        <p className="top">
          Collaborate and share knowledge with a private group for FREE.
        </p>
        <p className="bottom">
          Get Stack Overflow for Teams free for up to 50 users.
        </p>
      </LeftBox>
      <RightBox></RightBox>
    </Container>
  );
}

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled.div`
  width: 410px;
  height: 285px;
  margin: 0 48px 0 128px;
  font-size: 15px;

  h1 {
    font-size: 27px;
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 2px;
  }

  .top {
    color: #6a737c;
  }

  .bottom {
    color: #0074cc;
  }
`;

const InnerBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 24px;

  svg {
    margin-right: 8px;
    fill: #0a95ff;
  }
`;

const RightBox = styled.div`
  background-color: aliceblue;
  width: 316px;
  height: 80%;
`;
