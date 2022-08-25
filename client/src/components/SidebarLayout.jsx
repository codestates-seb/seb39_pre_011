import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";

const SidebarLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default SidebarLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
