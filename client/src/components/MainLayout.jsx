import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Sidebar"

const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;
