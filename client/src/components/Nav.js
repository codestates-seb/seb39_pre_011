import React from "react";
import styled from "styled-components";
import Search from "./ui/Search";
import LogoSrc from "../assets/sprites.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "./ui/Button";
import { ReactComponent as InboxImg } from "../assets/inbox.svg";
import { ReactComponent as AchievementsImg } from "../assets/achievements.svg";
import { ReactComponent as HelpImg } from "../assets/help.svg";
import { ReactComponent as LogoutImg } from "../assets/logout.svg";
import useStore from "../store/loginStore";
import globalStore from "../store/globalStore";
import Popup from "./ui/Popup";

const Nav = () => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = globalStore((state) => state);
  const { isLogin, setIsLogin } = useStore((state) => state);

  const openPopupHandler = () => {
    setIsOpen(!isOpen);
  };

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
              <NavLink to="/mypage" style={{ display: "flex" }}>
                <ProfileBox>
                  <img src="https://source.unsplash.com/random" alt="profile" />
                  <span>1</span>
                </ProfileBox>
              </NavLink>
              <ImgBox>
                <InboxImg />
              </ImgBox>
              <ImgBox>
                <AchievementsImg />
              </ImgBox>
              <ImgBox>
                <HelpImg />
              </ImgBox>
              <ImgBox onClick={openPopupHandler}>
                <LogoutImg />
              </ImgBox>
              {isOpen ? <Popup /> : null}
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
                  hoverbackground="#B3D3EA"
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
  padding: 0 10px;

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

  &:hover {
    background-color: #e3e6e8;
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
  text-decoration: none; // ?????? ??????
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  color: #525960;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    background-color: #e3e6e8;
    border-radius: 1000px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 13px;

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
  height: 100%;

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
    width: 100%;
    height: 100%;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #e3e6e8;
  }
`;
