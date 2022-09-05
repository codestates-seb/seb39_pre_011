import React from "react";
import styled from "styled-components";
import useStore from "../../store/loginStore";
import globalStore from "../../store/globalStore";
import { useNavigate } from "react-router-dom";

import { ReactComponent as LogoImg } from "../../assets/logo.svg";

const Popup = () => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = globalStore((state) => state);
  const { isLogin, setIsLogin } = useStore((state) => state);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    alert("로그아웃되었습니다.");
    navigate("/");
  };

  return (
    <>
      {isOpen ? (
        <Container>
          <Header>
            <h3>CURRENT COMMUNITY</h3>
          </Header>
          <Content>
            <div className="box">
              <div className="left">
                <LogoBox>
                  <LogoImg />
                </LogoBox>
                <div>Stack Overflow</div>
              </div>
              <div className="right">
                <span>help</span>
                <span>chat</span>

                <span onClick={logout}>log out</span>
              </div>
            </div>
          </Content>
          <Header>
            <h3>YOUR COMMUNITIES</h3>
          </Header>
          <Content>
            <div className="box">
              <div className="left">
                <LogoBox>
                  <LogoImg />
                </LogoBox>
                <div>Stack Overflow</div>
              </div>
            </div>
          </Content>
          <Header>
            <h3>MORE STACK EXCHANGE COMMUNITIES</h3>
          </Header>

          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
          <div>PoppupPopupPopupPopupPopu</div>
        </Container>
      ) : null}
    </>
  );
};

export default Popup;

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 55px;

  width: 375px;
  right: 116.5px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 300px;
  color: #0074cc;
  font-size: 12px;

  line-height: 14.3px;
  background-color: #fff;
`;

const Header = styled.div`
  width: 100%;
  background-color: #f1f2f3;
  position: relative;
  clear: both;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  font-weight: 700;
`;

const Content = styled.div`
  width: 100%;

  .box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 7px 0;

    &:hover {
      background-color: #e1ecf4;
    }
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 2;
    font-weight: bold;
    padding: 8px;
  }

  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1.5;
    padding: 8px;

    span {
      padding-left: 10px;

      &:hover {
        color: #0a95ff;
      }
    }
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
`;
