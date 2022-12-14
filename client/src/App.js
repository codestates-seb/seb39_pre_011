import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import useStore from "./store/loginStore";
import axios from "axios";

function App() {
  const { pathname } = useLocation();
  const { isLogin, setIsLogin } = useStore((state) => state);

  // 새로고침시에도 로그인 유지
  const tokenInfo = localStorage.getItem("token");

  useEffect(() => {
    if (tokenInfo) {
      setIsLogin(true);
    }
  }, []);

  // axios
  //   .post("/singup", {
  //     name: "dskf",
  //     email: "sdfd@gmail.com",
  //     password: "sdkfl!!11",
  //   })
  //   .then((res) => console.log(res.data));

  // axios
  //   .post("/singup", {
  //     name: "dskf",
  //     email: "sdfd@gmail.com",
  //     password: "sdkfl!!11",
  //   })
  //   .then((res) => console.log(res.data));

  return (
    <>
      <AppContainer>
        <Nav />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Questions />} />
            <Route path="/detail/:question_id" element={<Detail />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/users" element={<Users />} />
            <Route path="/mypage" element={<MyPage />} />
            {/* <Route path="/users/:id" element={<MyPage />} /> */}
          </Route>

          <Route
            path="/login"
            element={isLogin ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ask" element={<Ask />} />
        </Routes>
        {pathname !== "/login" && pathname !== "/signup" ? <Footer /> : null}
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  top: 50px;
`;
