import React from "react";
import styled from "styled-components";
import { Tag } from "../ui/Tag";
import { AsideContainer, AsideContent, AsideTitle } from "../ui/Aside";

function QuestionAside() {
  return (
    <Container>
      <AsideContainer>
        <AsideTitle>Custom Filter</AsideTitle>
        <AsideContent color={"rgb(10,149,225)"}>
          Create a custom filter
        </AsideContent>
      </AsideContainer>

      <AsideContainer>
        <AsideTitle>Watched Tags</AsideTitle>
        <AsideContent color={"rgb(10,149,225)"} display={"flex"}>
          <div className="icon">🔍</div>
          <div>Watch tags to curate your list of questions.</div>
          <button>
            <span>👀</span>Watch a tag
          </button>
        </AsideContent>
      </AsideContainer>

      <AsideContainer>
        <AsideTitle>Ignored Tags</AsideTitle>
        <AsideContent color={"rgb(10,149,225)"} display={"flex"}>
          <button>Add an ignored tag</button>
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
  .icon {
    font-size: 40px;
    margin: 10px 0;
  }
  button {
    background-color: #b3d3ea;
    border: 1px solid #7aa7ce;
    border-radius: 3px;
    padding: 10px;
    color: rgb(44, 88, 199);
    font-size: 12px;
  }
`;

export default QuestionAside;
