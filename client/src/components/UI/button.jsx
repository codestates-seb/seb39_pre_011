import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background: ${(props) => props.background || "#0A96FF"};
  color: ${(props) => props.color || "#fff"};
  border-radius: 3px;
  border: 1px solid ${(props) => props.border || "hsl(205,41%,63%)"};
  width: ${(props) => props.width || "68.44px"};
  height: ${(props) => props.height || "33px"};
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  font-size: 13px;
  text-align: center;
  padding: ${(props) => props.padding || "8px 10.4px"} ;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverbackground || "#0074cc"};
  }
`;

export const ButtonSNS = styled.button`
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#3b4045"};
  border-radius: 5px;
  border: 1px solid ${(props) => props.border || "transparent"};
  width: ${(props) => props.width || "285px"};
  height: ${(props) => props.height || "40px"};
  transition-duration: 0.4s;
  font-size: 13px;
  text-align: center;
  padding: 10.4px;
  margin: 4px 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;
