import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoImg } from "../assets/logo.svg";

function Footer() {
  return (
    <Container>
      <Box>
        <LogoBox>
          <NavLink to="/">
            <LogoImg />
          </NavLink>
        </LogoBox>
        <CenterBox>
          <InnerBox>
            <Title>STACK OVERFLOW</Title>
            <ul>
              <NavLink to="/">
                <li>Questions</li>
              </NavLink>
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
        </CenterBox>

        <RightBox>
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
            <p>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under <span>CC BY-SA.</span>
            </p>

            <p>rev 2022.8.26.42919</p>
          </Copyright>
        </RightBox>
      </Box>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 322px;
  background-color: #232629;
  padding: 32px 12px 12px 12px;
`;

const Box = styled.div`
  width: 83%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 auto;
`;

const InnerBox = styled.div`
  flex: 3;
  li {
    color: #9fa6ad;
    line-height: 2;
    font-size: 13px;
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 150px;

  li {
    color: #9fa6ad;
    line-height: 1.6;
  }
`;

const Title = styled.h5`
  color: #babfc4;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;

  ul li {
    float: left;
    margin-right: 1rem;
  }
`;

const Copyright = styled.div`
  color: #9199a1;
  font-size: 11px;
  line-height: 14px;
  padding-right: 3rem;
  letter-spacing: 0.7px;
  p span {
    text-decoration: underline;
  }
`;

const LogoBox = styled.div`
  flex: 0 0 64px;
`;

const CenterBox = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-direction: row;
`;
