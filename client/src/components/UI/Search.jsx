import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchImg } from "../../assets/search.svg";

const Search = () => {
  return (
    <Container>
      <div className="search-box">
        <SearchImg />
        <SearchInput type="text" placeholder="Search..." />
      </div>
    </Container>
  );
};
export default Search;

const Container = styled.form`
  display: flex;
  justify-items: center;
  align-items: center;

  .search-box {
    position: relative;
  }

  svg {
    position: absolute;
    margin-top: 7px;
    margin-left: 10px;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #babfc4;
  background: #fff;
  width: 700px;
  height: 32px;
  padding-left: 35px;
`;
