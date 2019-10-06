import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.text};
`;

const Line = props => {
  return <StyledLine></StyledLine>;
};

export default Line;
