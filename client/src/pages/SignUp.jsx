import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <Container>
      <LeftBox>
        <h1>Join the Stack Overflow community</h1>
        <p>Get unstuck — ask a question</p>
        <p>Unlock new privileges like voting and commenting</p>
        <p>Save your favorite tags, filters, and jobs</p>
        <p>Earn reputation and badges</p>
      </LeftBox>
      <RightBox></RightBox>
    </Container>
  );
}

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled.div`
  background-color: antiquewhite;
  width: 40%;
  height: 40%;
`;

const RightBox = styled.div`
  background-color: aliceblue;
  width: 40%;
  height: 40%;
`;
