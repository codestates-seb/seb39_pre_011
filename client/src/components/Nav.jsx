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
import profile from "../assets/profile.jpg";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Header>
      <OragneLine />
      <Container>
        <NavLink to="/">
          <Logo />
        </NavLink>
        {isLogin ? (
          <BoxLogin>
            <div className="left">
              <NavStyle to="/">Products</NavStyle>
            </div>
            <div className="center">
              <Search />
            </div>
            <div className="right">
              <ProfileBox>
                <img src={profile} alt="profile" />
                <span>1</span>
              </ProfileBox>
              <InboxImg />
              <AchievementsImg />
              <HelpImg />
              <LogoutImg />
            </div>
          </BoxLogin>
        ) : (
          <Box>
            <div className="left">
              <NavStyle to="/">About</NavStyle>
              <NavStyle to="/">Products</NavStyle>
              <NavStyle to="/">For Teams</NavStyle>
            </div>
            <div className="center">
              <Search />
            </div>
            <div className="right">
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
            </div>
          </Box>
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

  z-index: 1;

  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const Container = styled.div`
  width: 85%;
  height: 50px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 5px;

  @media only screen and (min-width: 0px) and (max-width: 1280px) {
    width: 100%;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  margin-left: 0.5rem;

  img {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  span {
    font-size: 12px;
    font-weight: 700;
  }
`;

const OragneLine = styled.div`
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

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  .left {
    display: flex;
    justify-content: space-around;
    flex: 2;
  }

  .center {
    display: flex;
    justify-content: center;
    flex: 6;
  }

  .right {
    display: flex;
    justify-content: space-around;
    flex: 1;
    gap: 5px;
  }
`;

const BoxLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  .left {
    display: flex;
    justify-content: center;
    flex: 0.9;
  }

  .center {
    display: flex;
    justify-content: flex-start;
    flex: 7.5;
  }

  .right {
    display: flex;
    justify-content: space-between;
    flex: 1.9;
  }
`;
