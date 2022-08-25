import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Question from "./pages/Question";
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
    <>
      <AppContainer>
        <Nav />
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Question />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/users:id" element={<MyPage />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100vw; */
  /* height: 100vh; */
  /* margin-top: 50px; */
`;
