import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoSrc from "../assets/sprites.svg";

function Footer() {
  return (
    <Container>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <InnerBox>
        <Title>STACK OVERFLOW</Title>
        <ul>
          <li>Questions</li>
          <li>Help</li>
        </ul>
      </InnerBox>
      <InnerBox>
        <Title>PRODUCTS</Title>
        <ul>
          <li>Teams</li>
          <li>Advertising</li>
          <li>Collectives</li>
          <li>Talent</li>
        </ul>
      </InnerBox>
      <InnerBox>
        <Title>COMPANY</Title>
        <ul>
          <li>About</li>
          <li>Press</li>
          <li>Work Here</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
          <li>Cookie Settings</li>
          <li>Cookie Policy</li>
        </ul>
      </InnerBox>
      <InnerBox>
        <Title>STACK EXCHANGE NETWORK</Title>
        <ul>
          <li>Technology</li>
          <li>Culture & recreation</li>
          <li>Life & arts</li>
          <li>Science</li>
          <li>Professional</li>
          <li>Business</li>
          <li> </li>
          <li>API</li>
          <li>Data</li>
        </ul>
      </InnerBox>
      <InnerBox>
        <SnsBox>
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </SnsBox>
        <Copyright>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.8.26.42919
        </Copyright>
      </InnerBox>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 322px;
  background-color: #232629;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  background: url(${LogoSrc}) no-repeat 0 100%;
  width: 32px;
  height: 37px;
`;

const InnerBox = styled.div`
  margin: 1rem 3rem;
  li {
    color: #9fa6ad;
    line-height: 1.6;
  }
`;

const Title = styled.h5`
  color: #babfc4;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 12px;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.div`
  color: #9199a1;
`;
