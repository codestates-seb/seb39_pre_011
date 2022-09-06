import React, { useEffect } from "react";
import styled from "styled-components";
import useStore from "../store/loginStore";
import { useParams } from "react-router-dom";
import { ButtonSecondary } from "../components/ui/Button";

import { ReactComponent as CakeImg } from "../assets/mypage/cake.svg";
import { ReactComponent as CalendarImg } from "../assets/mypage/calendar.svg";
import { ReactComponent as ClockImg } from "../assets/mypage/clock.svg";

import { ReactComponent as NetworkImg } from "../assets/mypage/network.svg";
import { ReactComponent as PencilImg } from "../assets/mypage/pencil.svg";

function Mypage() {
  const { name } = useStore((state) => state);

  return (
    <Container>
      <TopBox>
        <ProfileBox>
          <img src="https://source.unsplash.com/random" alt="profile" />
        </ProfileBox>
        <InfoBox>
          <NameBox>{name}</NameBox>
          <NameBox>Peter</NameBox>
          <SubBox>
            <div>
              <CakeImg />
              <span> Member for 10 days</span>
            </div>
            <div>
              <ClockImg />
              <span> Last seen this week</span>
            </div>
            <div>
              <CalendarImg />
              <span>Visited 10 days, 10 consecutive</span>
            </div>
          </SubBox>
        </InfoBox>
        <ButtonBox>
          <ButtonSecondary>
            <PencilImg />
            <span> Edit profile</span>
          </ButtonSecondary>
          <ButtonSecondary>
            <NetworkImg />
            <span> Network profile</span>
          </ButtonSecondary>
        </ButtonBox>
      </TopBox>
      <TabBox></TabBox>
      <BottomBox></BottomBox>
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  height: calc(100vh - 50px);
  padding: 24px;
  display: flex;
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  height: 144px;
`;

const ProfileBox = styled.div`
  display: flex;

  img {
    width: 128px;
    height: 128px;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 8px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
  }

  &:hover {
    background-color: #e3e6e8;
  }
`;

const TabBox = styled.div``;

const BottomBox = styled.div``;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px;
`;

const ButtonBox = styled.div`
  display: flex;
  position: absolute;
  top: 50;
  right: 10%;

  span {
    letter-spacing: 0.5px;
    margin-left: 5px;
  }
`;

const NameBox = styled.div`
  font-size: 34px;
  margin: 4px 4px 12px;
`;

const SubBox = styled.div`
  display: flex;

  color: #6a737c;
  font-size: 13px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
  span {
    margin: 0 5px;
  }
`;
