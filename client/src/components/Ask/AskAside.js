import React from "react";
import styled from "styled-components";
import { AsideContainer, AsideContent, AsideTitle } from "../ui/Aside";
import { ReactComponent as One } from "./../../assets/numOne.svg";
import { ReactComponent as Two } from "./../../assets/numTwo.svg";
import { ReactComponent as Three } from "./../../assets/numThree.svg";
import { ReactComponent as Fold } from "./../../assets/fold.svg";

function AskAside() {
  return (
    <Container>
      <AsideContainer width={"320px"}>
        <AsideTitle backgroundColor={"#f8f9f9"}>
          Step 1: Draft your question
        </AsideTitle>
        <AsideContent color={"#232629"} backgroundColor={"#ffffff"}>
          <p>
            The community is here to help you with specific coding, algorithm,
            or language problems.
          </p>
          <p>Avoid asking opinion-based questions.</p>
          <div className="helpbox">
            <div className="help">
              <One />
              Summarize the problem
              <Fold />
            </div>
            <div className="help">
              <Two />
              Describe what you’ve tried
              <Fold />
            </div>
            <div className="help">
              <Three />
              Show some code
              <Fold />
            </div>
          </div>
        </AsideContent>
      </AsideContainer>
      <AsideContainer width={"320px"}>
        <AsideTitle backgroundColor={"#f8f9f9"}>
          <div className="helpboxTwo">
            Have a non-programming question? <Fold />
          </div>
        </AsideTitle>
      </AsideContainer>
      <AsideContainer width={"320px"}>
        <AsideTitle backgroundColor={"#f8f9f9"}>
          <div className="helpboxTwo">
            More helpful links <Fold />
          </div>
        </AsideTitle>
      </AsideContainer>
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 24px;

  p {
    line-height: 17px;
    margin-bottom: 13px;
  }
  .helpbox {
    margin: 0 -16px -16px -16px;
    .help {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      padding: 12px 15px;
      cursor: pointer;
      border-bottom: 1px solid #d6d9dc;
      position: relative;

      svg:nth-child(1) {
        fill: #0a95ff;
      }
      svg:nth-child(2) {
        position: absolute;
        right: 15px;
      }
    }
  }
  .helpboxTwo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #525960;
    }
  }
`;

export default AskAside;
