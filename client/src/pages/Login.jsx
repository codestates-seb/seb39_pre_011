import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/sprites.svg";
import { ButtonPrimary, ButtonSNS } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <Container>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <SNSBox>
        <ButtonSNS>Log in with Google</ButtonSNS>
        <ButtonSNS background="#2f3337" color="#fff">
          Log in with GitHub
        </ButtonSNS>
        <ButtonSNS background="#385499" color="#fff">
          Log in with Facebook
        </ButtonSNS>
      </SNSBox>

      <LoginForm>
        <Input>Email</Input>
        <Input>Password</Input>
        <ButtonPrimary width="240px" height="37px">
          Log in
        </ButtonPrimary>
      </LoginForm>
      <Description>
        Don't have an account?
        <NavStyle to="/signup"> Sign up</NavStyle>
      </Description>
      <Description>
        Are you an employer?
        <NavStyle to="/signup"> Sign up on Talent</NavStyle>
      </Description>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  background: url(${LogoSrc}) no-repeat 0 1.623%;
  width: 30px;
  height: 37px;
  margin: 1rem;
`;

const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 190px;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const Description = styled.div`
  margin-top: 12px;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  color: #0074cc;
`;
