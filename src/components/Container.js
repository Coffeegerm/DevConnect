import React from "react";
import styled from "styled-components";

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = ({ children }) => {
  return <Content>{children}</Content>;
};
