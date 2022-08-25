import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Ask from "./pages/Ask";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Router>
        <AppContainer>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/tags" element={<tags />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
