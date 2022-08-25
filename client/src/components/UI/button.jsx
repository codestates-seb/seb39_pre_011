import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background: ${(props) => props.background || "#2584f4"};
  color: ${(props) => props.color || "white"};
  border-radius: 50px;
  width: ${(props) => props.width || "143px"};
  height: ${(props) => props.height || "50px"};
  transition-duration: 0.4s;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => props.background || "#2863fb"};
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
