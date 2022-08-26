import React from "react";
import styled from "styled-components";

const Input = ({ children, value, onChange, sub }) => {
  return (
    <Container>
      <Box>
        <label htmlFor="title">{children}</label>
        <span>{sub}</span>
      </Box>

      <input defaultValue={value} onChange={onChange} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  margin: 2px;

  input {
    width: ${(props) => props.width || "268px"};
    height: 33px;
    padding: 8px 9px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    margin-top: 5px;
  }
`;

const Box = styled.div`
  label {
    height: 20px;
    padding: 0 2px;
    font-size: 15px;
    font-weight: 600;
  }

  span {
    float: right;
    font-size: 12px;
    color: #0074cc;
  }
`;
