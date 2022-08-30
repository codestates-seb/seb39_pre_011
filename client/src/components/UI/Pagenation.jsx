import React, { useState } from "react";
import styled from "styled-components";

const Pagenation = ({ total, page, setPage }) => {
  const [clickPage, setClickPage] = useState(0);
  const totalPage = Math.ceil(total / 10);

  const handlePage = (idx) => {
    setClickPage(idx);
  };
  return (
    <Nav>
      {Array(totalPage)
        .fill()
        .map((_, idx) => {
          return (
            <button
              className={idx === clickPage ? "click" : null}
              key={idx}
              onClick={() => {
                setPage(idx + 1);
                handlePage(idx);
              }}
              aria-current={page === idx + 1 ? "page" : null}
            >
              {idx + 1}
            </button>
          );
        })}
    </Nav>
  );
};

const Nav = styled.nav`
  margin-top: 50px;
  padding-left: 24px;

  > button {
    height: 27px;
    line-height: 10px;
    font-size: 13px;
    padding: 8px;
    margin: 0 2px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    color: rgb(12, 13, 14);
    background-color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #d6d9dc;
    }
  }

  .click {
    background-color: #f48225;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

export default Pagenation;
