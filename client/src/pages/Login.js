import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/sprites.svg";
import { ButtonPrimary, ButtonSNS } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink } from "react-router-dom";

import { ReactComponent as GoogleImg } from "../assets/google.svg";
import { ReactComponent as GithubImg } from "../assets/github.svg";
import { ReactComponent as FacebookImg } from "../assets/facebook.svg";
import { ReactComponent as TalentImg } from "../assets/signupTalent.svg";

function Login() {
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
          <Input>Email</Input>
          <Input sub="Forgot passowrd?">Password</Input>
          <ButtonPrimary width="240px" height="37px">
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

const LoginContent = styled.div``;

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
