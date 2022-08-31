/* eslint-disable no-useless-escape */
import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSNS } from "../components/ui/Button";
import { NavLink } from "react-router-dom";
import Input from "../components/ui/Input";
import useStore from "../store/loginStore";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Icon1 } from "../assets/signup/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/signup/icon2.svg";
import { ReactComponent as Icon3 } from "../assets/signup/icon3.svg";
import { ReactComponent as Icon4 } from "../assets/signup/icon4.svg";

import { ReactComponent as GoogleImg } from "../assets/google.svg";
import { ReactComponent as GithubImg } from "../assets/github.svg";
import { ReactComponent as FacebookImg } from "../assets/facebook.svg";
import { ReactComponent as TalentImg } from "../assets/signupTalent.svg";
import { ReactComponent as QuestionImg } from "../assets/questionmark.svg";

function SignUp() {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    loading,
    hasErrors,
    isLogin,
    setIsLogin,
    isName,
    isEmail,
    isPassword,
    setIsName,
    setIsEmail,
    setIsPassword,
    nameMessage,
    emailMessage,
    passwordMessage,
    setNameMessage,
    setEmailMessage,
    setPasswordMessage,
  } = useStore((state) => state);

  const navigate = useNavigate();

  // zustand 내의 axios post 요청
  const fetchData = useStore((state) => state.fetch);

  const onNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2~5글자로 작성해주세요.");
      setIsName(false);
    } else {
      setNameMessage(null);
      setIsName(true);
    }
  };

  const onEmailChange = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 작성해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage(null);
      setIsEmail(true);
    }
  };

  const onPasswordChange = (e) => {
    const pwRegex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    setPassword(e.target.value);

    if (!pwRegex.test(e.target.value)) {
      setPasswordMessage("숫자+영문자+특수문자 조합 8자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage(null);
      setIsPassword(true);
    }
  };

  if (loading) {
    return <p>Loading!!</p>;
  }

  if (hasErrors) {
    return <p>cannot read data!!</p>;
  }

  // zustand 외부에서 axios post 요청시
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await axios
  //     .post("http://localhost:3001/user", {
  //       name,
  //       email,
  //       password,
  //     })
  //     .then((res) => console.log(res.data))
  //     .then(() => alert("signup success"))
  //     .then(() => setIsLogin(true))
  //     .catch((err) => console.log(err.response.message));
  // };

  const handleSubmit = async () => {
    await fetchData(name, email, password)
      .then(() => alert("회원가입이 완료되었습니다!"))
      .then(() => setIsLogin(true))
      .then(() => navigate("/login"));
  };

  console.log(isLogin);

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
            <Input value={name} onChange={onNameChange}>
              Display name
            </Input>
            {name.length > 0 && (
              <div className={`message ${isName ? "success" : "error"}`}>
                {nameMessage}
              </div>
            )}

            <Input value={email} onChange={onEmailChange}>
              Email
            </Input>
            {email.length > 0 && (
              <div className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </div>
            )}

            <Input value={password} onChange={onPasswordChange} type="password">
              Password
            </Input>
            {password.length > 0 && (
              <div className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </div>
            )}
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
          <ButtonPrimary
            width="268px"
            height="37px"
            type="button"
            onClick={handleSubmit}
            disabled={!(isName && isEmail && isPassword)}
          >
            Sign up
          </ButtonPrimary>
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
  padding-top: 2rem;
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
  margin-top: 10px; ;
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

  .message {
    font-size: 11px;
  }

  .message.error {
    color: red;
  }
`;
