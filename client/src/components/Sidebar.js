import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Qicon } from "./../assets/question.svg";

function Sidebar() {
  let [click, setClick] = useState(0);
  const menu = [
    { title: "Question", path: "/" },
    { title: "Tags", path: "/tags" },
    { title: "Users", path: "/users" },
  ];

  const clickHandler = (idx) => {
    setClick(idx);
  };

  return (
    <Container>
      {menu.map((el, idx) => {
        return (
          <Link to={el.path} key={idx}>
            <div
              className={click === idx ? "on" : null}
              onClick={() => clickHandler(idx)}
            >
              {el.title === "Question" ? <Qicon /> : null} {el.title}
            </div>
          </Link>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 160px;
  padding-top: 80px;
  border-right: 1px solid #e3e6e8;
  font-size: 13px;

  display: flex;
  flex-direction: column;

  div {
    padding: 8px;
    display: flex;
    align-items: center;
  }

  .on {
    background-color: #f1f2f3;
    border-right: 3px solid #f48225;
    font-weight: 700;
  }
`;

export default Sidebar;
