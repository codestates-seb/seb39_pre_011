import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Questions";
import Nav from "./components/Nav";
import Ask from "./pages/Ask";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Users from "./pages/Users";
import Tags from "./pages/Tags";
import SidebarLayout from "./components/SidebarLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Nav />
      <AppContainer>
        <Routes>
          {/* SideBar O page */}
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/users" element={<Users />} />
          </Route>

          {/* SideBar X page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/users:id" element={<MyPage />} />
        </Routes>
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
