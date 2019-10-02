import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text};
  h1 {
    font-size: 50px;
    text-shadow: 4px 7px 1px ${({ theme }) => theme.darkPurple};
    letter-spacing: 3px;
    margin: 0px;
    padding: 0px;
    line-height: 1em;
  }
  p {
    letter-spacing: 2px;
    font-size: 30px;
    text-shadow: 2px 3px 1px ${({ theme }) => theme.darkPurple};
  }
  p:nth-child(1)  {
    margin-bottom: -15px;
  }
  p:nth-child(3) {
    margin-top: -12px;
  }
`;

const Headline = ({ destination }) => {
  return (
    <StyledHeadline>
      <p>Should I</p>
      <h1>BIKE-OR-BUS</h1>
      <p>to {destination} tomorrow</p>
    </StyledHeadline>
  );
};

export default Headline;
