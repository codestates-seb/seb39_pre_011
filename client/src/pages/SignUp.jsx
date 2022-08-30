import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSNS } from "../components/ui/Button";
import { NavLink } from "react-router-dom";
import Input from "../components/ui/Input";

import { ReactComponent as Icon1 } from "../assets/signup/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/signup/icon2.svg";
import { ReactComponent as Icon3 } from "../assets/signup/icon3.svg";
import { ReactComponent as Icon4 } from "../assets/signup/icon4.svg";

import { ReactComponent as GoogleImg } from "../assets/google.svg";
import { ReactComponent as GithubImg } from "../assets/github.svg";
import { ReactComponent as FacebookImg } from "../assets/facebook.svg";
import { ReactComponent as TalentImg } from "../assets/signupTalent.svg";
import { ReactComponent as QuestionImg } from "../assets/questionmark.svg";
import useStore from "../store";

function SignUp() {
  const fetchData = useStore((state) => state.fetch);

  const { name, email, password, setName } = useStore((state) => state);
  console.log(name);
  return (
    <Container>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
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
      <RightBox>
        <SNSBox>
          <ButtonSNS border="#d6d9dc" width="316px" height="38px">
            <GoogleImg />
            Sign up with Google
          </ButtonSNS>
          <ButtonSNS
            background="#2f3337"
            color="#fff"
            border="#d6d9dc"
            width="316px"
            height="38px"
          >
            <GithubImg />
            Sign up with GitHub
          </ButtonSNS>
          <ButtonSNS
            background="#385499"
            color="#fff"
            border="#f1f2f3"
            width="316px"
            height="38px"
          >
            <FacebookImg />
            Sign up with Facebook
          </ButtonSNS>
        </SNSBox>
        <SignupForm>
          <SignupContent>
            <Input value={name} onChange={setName}>
              Display name
            </Input>
            <Input>Email</Input>
            <Input>Password</Input>
          </SignupContent>
          <Description>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </Description>
          <CheckBox>
            <input type="checkbox" />
            Opt-in to receive occasional product updates, user research
            invitations, company announcements, and digests.
            <QuestionImg />
          </CheckBox>
          <ButtonPrimary width="268px" height="37px" onClick={fetchData}>
            Sign up
          </ButtonPrimary>
          console.log(fetchData)
          <BottomDescription>
            By clicking “Sign up”, you agree to our
            <span> terms of service, privacy policy</span> and
            <span> cookie policy</span>
          </BottomDescription>
        </SignupForm>
        <Description>
          Already have an account?
          <NavStyle to="/signup"> Log in</NavStyle>
        </Description>
        <Description>
          Are you an employer?
          <NavStyle to="/signup"> Sign up on Talent</NavStyle>
          <TalentImg />
        </Description>
      </RightBox>
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
  margin: 0 48px 0 0;
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
  align-items: center;
  margin-bottom: 24px;

  svg {
    margin-right: 8px;
    fill: #0a95ff;
  }
`;

const RightBox = styled.div`
  width: 316px;
`;

const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  svg {
    margin: 0 4px;
  }
`;

const SignupForm = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const Description = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6a737c;
  margin-bottom: 1rem;
`;

const BottomDescription = styled.div`
  margin-top: 2rem;
  font-size: 13px;
  color: #6a737c;

  span {
    color: #0074cc;
  }
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  color: #0074cc;
  margin-left: 3px;
`;

const CheckBox = styled.div`
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 13px;
  line-height: 1rem;
  margin-bottom: 8px;

  input {
    margin-right: 5px;
  }
`;

const SignupContent = styled.div`
  width: 100%;
`;
