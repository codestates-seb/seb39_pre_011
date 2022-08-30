import styled from "styled-components";

export const AsideContainer = styled.div`
  width: ${(props) => props.width || "300px"};
  font-size: 13px;
  border: 1px solid ${(props) => props.border || "#d6d9dc" };
  border-radius: 3px;
  box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.3);
`;

export const AsideTitle = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid ${(props) => props.border || "#d6d9dc" };
  background-color: ${(props) => props.backgroundColor || "#f8f9f9"};
  color: #525960;
  font-weight: ${(props) => props.weight || "400"};
`;

export const AsideContent = styled.div`
  padding: 15px 15px;
  color: ${(props) => props.color || "rgb(106, 115, 124)"};
  background-color: ${(props) => props.backgroundColor || "ffffff"};
  display: ${(props) => props.display || "block"};
  border-bottom: 1px solid ${(props) => props.border || "#d6d9dc" };
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
