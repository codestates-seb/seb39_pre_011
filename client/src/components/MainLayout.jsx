import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Sidebar"

const MainLayout = () => {
  return (
    <>
      <Container>
        <div className='sidebox'>
          <SideBar />
        </div>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;

  .sidebox {
    position: relative;
    border-right: 1px solid #e3e6e8;
  }
`;
