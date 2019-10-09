import React from 'react';
import styled from 'styled-components';

const StyledWeatherChoice = styled.p`
  ${({ chosen, theme }) =>
    chosen
      ? `
    font-weight: 900;
    color: ${theme.text};
  `
      : `
    font-weight: 300;
    color: ${theme.darkPurple};
  `};
`;

const WeatherChoice = ({ name, chosen, onClick }) => {
  return (
    <StyledWeatherChoice chosen={chosen} onClick={onClick}>
      {name}
    </StyledWeatherChoice>
  );
};

export default WeatherChoice;
