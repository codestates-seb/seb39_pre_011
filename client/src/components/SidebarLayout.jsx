import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Sidebar"

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
  width: 100%;
  display: flex;
  justify-content: center;
`;
