import styled from "styled-components";

export const ButtonLogin = styled.button`
  background: ${(props) => props.background || "#E1ECF4"};
  color: ${(props) => props.color || "#39739D"};
  border-radius: 3px;
  width: ${(props) => props.width || "59.45px"};
  height: ${(props) => props.height || "33px"};
  transition-duration: 0.4s;
  font-size: 13px;
  text-align: center;
  padding: 8px 10.4px;

  &:hover {
    background-color: ${(props) => props.background || "#2863fb"};
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
