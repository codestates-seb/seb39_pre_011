import React from "react";
import styled from "styled-components";
import DetailAside from "../Detail/DetailAside";
import { Tag } from "../ui/Tag";
import { AsideContainer, AsideContent, AsideTitle } from "../ui/Aside";
import { ButtonPrimary } from "../ui/Button";
import { ReactComponent as Glass } from "./../../assets/glass.svg";
import { ReactComponent as Watch } from "./../../assets/watch.svg";

function QuestionAside() {
  return (
    <Container>
      <DetailAside />
      <AsideContainer>
        <AsideTitle>Custom Filter</AsideTitle>
        <AsideContent color={"rgb(10,149,225)"}>
          Create a custom filter
        </AsideContent>
      </AsideContainer>

      <AsideContainer>
        <AsideTitle>Watched Tags</AsideTitle>
        <AsideContent color={"rgb(106,115,124)"} display={"flex"}>
          <Glass />
          <div>Watch tags to curate your list of questions.</div>
          <ButtonPrimary
            padding={"9px"}
            width={"auto"}
            height={"auto"}
            background={"hsl(205,46%,92%)"}
            color={"hsl(205,47%,42%)"}
            hoverbackground={"#b3d3ea"}
          >
            <Watch />
            Watch a tag
          </ButtonPrimary>
        </AsideContent>
      </AsideContainer>

      <AsideContainer>
        <AsideTitle>Ignored Tags</AsideTitle>
        <AsideContent color={"rgb(10,149,225)"} display={"flex"}>
          <ButtonPrimary
            padding={"9px"}
            width={"auto"}
            height={"auto"}
            background={"hsl(205,46%,92%)"}
            color={"hsl(205,47%,42%)"}
            hoverbackground={"#b3d3ea"}
          >
            Add an ignored tag
          </ButtonPrimary>
        </AsideContent>
      </AsideContainer>

      <div className="tags">
        <h4>Related Tags</h4>
        <div>
          <Tag>javascript</Tag>
          <span> x 241552</span>
        </div>
        <div>
          <Tag>javascript</Tag>
          <span> x 241552</span>
        </div>
        <div>
          <Tag>javascript</Tag>
          <span> x 241552</span>
        </div>
        <div>
          <Tag>javascript</Tag>
          <span> x 241552</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .tags {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
      margin: 16px 0;
      font-size: 20px;
    }
    span {
      color: rgb(106, 115, 124);
      font-size: 12px;
    }
  }
  svg {
    fill: #379fef;
  }
  button {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;

export default QuestionAside;
