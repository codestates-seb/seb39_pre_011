import React from "react";
import styled from "styled-components";

const Input = ({ children, value, onChange }) => {
  return (
    <Container>
      <label htmlFor="title">{children}</label>
      <input defaultValue={value} onChange={onChange} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 70px;
  margin: 3px;

  label {
    height: 20px;
    margin: 1px 0;
    padding: 0 2px;
    font-size: 15px;
    font-weight: bold;
  }

  input {
    height: 16px;
    padding: 7.8px 9.1px;
  }
`;
