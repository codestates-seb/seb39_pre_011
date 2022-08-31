import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Qicon } from "./../assets/question.svg";
import { ReactComponent as Star } from "./../assets/star.svg";
import { ReactComponent as Team } from "./../assets/team.svg";

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
    <NavContainer>
      <Nav>
        <ul>
          <li className="title">Home</li>
        </ul>
        <ul>
          <li className="title">public</li>
          {menu.map((el, idx) => {
            return (
              <Link to={el.path} key={idx}>
                <li
                  className={click === idx ? "on" : null}
                  onClick={() => {
                    clickHandler(idx);
                    window.scrollTo(0, 0);
                  }}
                >
                  {el.title === "Question" ? <Qicon /> : null} {el.title}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li className="title">Collectives</li>
          <li>
            <Star />
            Explore Collectives
          </li>
        </ul>
        <ul>
          <li className="title">TEAMS</li>
          <li>
            <Team />
            Create Free Team
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: relative;
  border-right: 1px solid #e3e6e8;
`;

const Nav = styled.div`
  width: 160px;
  padding-top: 30px;
  font-size: 13px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: sticky;
  top: 50px;

  svg {
    margin-right: 5px;
  }

  li {
    padding: 8px;
    display: flex;
    align-items: center;
  }
  ul .title {
    font-size: 12px;
    color: rgb(106, 115, 124);
  }
  .title + li > svg {
    fill: #f48225;
  }

  .on {
    background-color: #f1f2f3;
    border-right: 3px solid #f48225;
    font-weight: 700;
  }
`;

export default Sidebar;
