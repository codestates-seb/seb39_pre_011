import React from "react";
import styled from "styled-components";
import { AsideContainer, AsideContent, AsideTitle } from "./../ui/Aside";

function DetailAside() {
  return (
    <Container>
      <AsideContainer border={"#F1E5BC"}>
        <AsideTitle
          backgroundColor={"#FBF3D5"}
          border={"#F1E5BC"}
          weight={"700"}
        >
          The Overflow Blog
        </AsideTitle>
        <AsideContent
          as="ul"
          backgroundColor={"#FDF7E2"}
          color={"rgb(82,89,96)"}
          border={"#F1E5BC"}
        >
          <li>Open source and accidental innovation</li>
          <li>The luckiest guy in AI (Ep. 477)</li>
        </AsideContent>
        <AsideTitle
          backgroundColor={"#FBF3D5"}
          border={"#F1E5BC"}
          weight={"700"}
        >
          The Overflow Blog
        </AsideTitle>
        <AsideContent
          as="ul"
          backgroundColor={"#FDF7E2"}
          color={"rgb(82,89,96)"}
          border={"#F1E5BC"}
        >
          <li>Recent site instability, major outages - July/August 2022</li>
          <li>Please welcome Valued Associate #1301 - Emerson</li>
          <li>Staging Ground Workflow: Question Lifecycle</li>
          <li>Collectives Update: WSO2 launches, and Google Go sunsets</li>
        </AsideContent>
        <AsideTitle
          backgroundColor={"#FBF3D5"}
          border={"#F1E5BC"}
          weight={"700"}
        >
          The Overflow Blog
        </AsideTitle>
        <AsideContent
          as="ul"
          backgroundColor={"#FDF7E2"}
          color={"rgb(82,89,96)"}
          border={"#F1E5BC"}
        >
          <li>How should we clean up the [kickstarter] tag?</li>
          <li>
            Should I suggest edits to transform code blocks into Stack Snippets
            for...
          </li>
        </AsideContent>
      </AsideContainer>
    </Container>
  );
}

const Container = styled.aside`
  li {
    margin-bottom: 12px;
  }
  li:last-child {
    margin-bottom: 0px;
  }
`;

export default DetailAside;
