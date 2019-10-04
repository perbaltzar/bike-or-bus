import React from 'react';
import styled from 'styled-components';
import { Bus } from './icons';

const StyledResults = styled.div`
  width: 65vw;
  height: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 7px solid ${({ theme }) => theme.text};
  box-shadow: 7px 7px 1px ${({ theme }) => theme.darkPurple};
  border-radius: 30px;
  margin-top: 20px;

  svg {
    height: auto;
    width: 60%;
  }
`;

const Results = ({ vehicle, reason }) => {
  return (
    <StyledResults>
      {vehicle === 'bus' && <Bus />}
      <p className="reason">{reason}</p>
    </StyledResults>
  );
};

export default Results;
