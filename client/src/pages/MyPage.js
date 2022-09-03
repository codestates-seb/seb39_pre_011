import React from "react";
import styled from "styled-components";
import useStore from "../store/loginStore";

function Mypage() {
  const { name, email, password } = useStore((state) => state);

  return (
    <Container>
      <TopBox>
        <ProfileBox>
          <img src="https://source.unsplash.com/random" alt="profile" />
        </ProfileBox>
        <InfoBox>
          <div>{name}</div>
          <div>{email}</div>
          <div>{password}</div>
          <div>
            <div>Member for 10 days</div>
            <div>Last seen this week</div>
            <div>Visited 10 days, 10 consecutive</div>
          </div>
        </InfoBox>
        <ButtonBox>
          <button>Edit profile</button>
          <button>Network profile</button>
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
  height: 23%;
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

const InfoBox = styled.div``;

const ButtonBox = styled.div``;
