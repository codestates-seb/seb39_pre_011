import React, { useEffect } from "react";
import styled from "styled-components";
import LogoSrc from "../assets/sprites.svg";
import { ButtonPrimary, ButtonSNS } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../store/loginStore";
import axios from "axios";

import { ReactComponent as GoogleImg } from "../assets/google.svg";
import { ReactComponent as GithubImg } from "../assets/github.svg";
import { ReactComponent as FacebookImg } from "../assets/facebook.svg";
import { ReactComponent as TalentImg } from "../assets/signupTalent.svg";

function Login() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    isLogin,
    setIsLogin,
    isEmail,
    setIsEmail,
    isPassword,
    setIsPassword,
    emailMessage,
    setEmailMessage,
    passwordMessage,
    setPasswordMessage,
    data,
    setData,
  } = useStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    // Token 추가
    localStorage.setItem("token", data);
    // Token 읽어오기
    console.log(localStorage.getItem("token"));
  }, [data]);

  // 이메일 입력 변경 이벤트 핸들러
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

  // 비밀번호 입력 변경 이벤트 핸들러
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      // filter 기능 (BE 연결시 없어도 되는 기능)
      // const filtered = response.data.find(
      //   (user) => user.email === email && user.password === password
      // );

      setData(response.data);
      console.log(data);

      if (data !== undefined && data.length !== 0) {
        console.log("login success");
        setIsLogin(true);
        alert("login success");
      } else {
        console.log("login fail");
        setIsLogin(false);
        alert("login fail");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLogin) {
    navigate("/");
  }
  return (
    <Container>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <SNSBox>
        <ButtonSNS border="#d6d9dc">
          <GoogleImg />
          Log in with Google
        </ButtonSNS>
        <ButtonSNS background="#2f3337" color="#fff" border="#d6d9dc">
          <GithubImg />
          Log in with GitHub
        </ButtonSNS>
        <ButtonSNS background="#385499" color="#fff" border="#f1f2f3">
          <FacebookImg />
          Log in with Facebook
        </ButtonSNS>
      </SNSBox>

      <LoginForm>
        <LoginContent>
          <Input value={email} onChange={onEmailChange}>
            Email
          </Input>
          {email.length > 0 && (
            <div className={`message ${isEmail ? "success" : "error"}`}>
              {emailMessage}
            </div>
          )}
          <Input
            value={password}
            onChange={onPasswordChange}
            type="password"
            sub="Forgot passowrd?"
          >
            Password
          </Input>

          {password.length > 0 && (
            <div className={`message ${isPassword ? "success" : "error"}`}>
              {passwordMessage}
            </div>
          )}
          <ButtonPrimary
            width="240px"
            height="37px"
            margin="10px 0 0 0"
            onClick={handleSubmit}
            disabled={!(isEmail && isPassword)}
          >
            Log in
          </ButtonPrimary>
        </LoginContent>
      </LoginForm>
      <BottomBox>
        <Description>
          Don't have an account?
          <NavStyle to="/signup"> Sign up</NavStyle>
        </Description>
        <Description>
          Are you an employer?
          <NavStyle to="/signup"> Sign up on Talent</NavStyle>
          <TalentImg />
        </Description>
      </BottomBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin: 0 4px;
  }
`;

const Logo = styled.div`
  background: url(${LogoSrc}) no-repeat 0 1.623%;
  width: 30px;
  height: 37px;
  margin: 4rem 0 24px 0;
`;

const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const LoginForm = styled.div`
  width: 285px;
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

const LoginContent = styled.div`
  .message {
    font-size: 11px;
  }

  .message.error {
    color: red;
  }
`;

const Description = styled.div`
  margin-top: 12px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  color: #0074cc;
  margin-left: 3px;
`;

const BottomBox = styled.div``;
