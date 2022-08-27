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
        <AsideContent backgroundColor={"#FBF3D5"}>
          <div>Open source and accidental innovation</div>
          <div>The luckiest guy in AI (Ep. 477)</div>
        </AsideContent>
      </AsideContainer>
    </Container>
  );
}

const Container = styled.aside``;

export default DetailAside;
