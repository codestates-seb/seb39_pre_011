import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Questions from "./pages/Questions";
import Nav from "./components/Nav";
import Ask from "./pages/Ask";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Users from "./pages/Users";
import Tags from "./pages/Tags";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AppContainer>
        <Nav />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Questions />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/users" element={<Users />} />
            <Route path="/detail" element={<Detail />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/users:id" element={<MyPage />} />
        </Routes>
        <Footer />
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
