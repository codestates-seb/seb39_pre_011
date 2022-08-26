import React, { useState } from "react";
import styled from "styled-components";
import Search from "./ui/Search";
import LogoSrc from "../assets/sprites.svg";
import { NavLink } from "react-router-dom";
import { ButtonPrimary } from "./ui/Button";
import { ReactComponent as InboxImg } from "../assets/inbox.svg";
import { ReactComponent as AchievementsImg } from "../assets/achievements.svg";
import { ReactComponent as HelpImg } from "../assets/help.svg";
import { ReactComponent as LogoutImg } from "../assets/logout.svg";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Header>
      <OragneLine />
      <Container>
        <NavLink to="/">
          <Logo />
        </NavLink>
        {isLogin ? (
          <>
            <NavStyle to="/">Products</NavStyle>
            <Search />
            <ProfileBox>
              <img alt="profile" />
              <span>1</span>
            </ProfileBox>
            <div>
              <InboxImg />
              <AchievementsImg />
              <HelpImg />
              <LogoutImg />
            </div>
          </>
        ) : (
          <>
            <NavStyle to="/">About</NavStyle>
            <NavStyle to="/">Products</NavStyle>
            <NavStyle to="/">For Teams</NavStyle>
            <Search />
            <NavLink to="/login">
              <ButtonPrimary
                background="#E1ECF4"
                color="#39739D"
                border="hsl(205,41%,63%)"
                width="59.45px"
              >
                Log in
              </ButtonPrimary>
            </NavLink>
            <NavLink to="/signup">
              <ButtonPrimary>Sign up</ButtonPrimary>
            </NavLink>
          </>
        )}
      </Container>
    </Header>
  );
};

export default Nav;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: hsl(210, 8%, 97.5%);
  box-sizing: border-box;
  min-width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 1;

  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const Container = styled.div`
  width: 83%;
  max-width: 100%;

  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;

  @media only screen and (min-width: 0px) and (max-width: 1280px) {
    width: 100%;
  }
`;

const ProfileBox = styled.div`
  img {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const OragneLine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 3px;
  background-color: #f48224;
`;

const Logo = styled.div`
  background: url(${LogoSrc}) no-repeat 0 100%;
  width: 150px;
  height: 30px;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none; // 밑줄 제거
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 0 10px;
  color: #525960;
`;
