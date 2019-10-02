import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import Button from './Button';
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = props => {
  return (
    <StyledMain>
      <Headline destination={'Yrgo'} />
      <Button text={"Let's Check"} />
    </StyledMain>
  );
};

export default Main;
