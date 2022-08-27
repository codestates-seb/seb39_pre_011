import React from "react";
import styled from "styled-components";
import TagTitle from "../components/Tags/TagTitle";
import TagList from "../components/Tags/TagList";

function Tags() {
  return (
    <Container>
      <TagTitle />
      <TagList />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  display: flex;

  flex-direction: column;
  gap: 50px;
`;

export default Tags;
