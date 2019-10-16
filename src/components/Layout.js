import React from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';

const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${({ theme }) => theme.background};
`;

const Layout = ({ children }) => {
  return (
    <Div100vh>
      <StyledLayout>{children}</StyledLayout>
    </Div100vh>
  );
};

export default Layout;
