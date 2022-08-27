import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Sidebar"
import Footer from './Footer';

const MainLayout = () => {
  return (
    <Container>
      <div className='content'>
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;

const Container = styled.main`
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
