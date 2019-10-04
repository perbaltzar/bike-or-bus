import React from 'react';
import styled from 'styled-components';
import { Cloud, Rain, Snow, Sun, Wind } from './icons';
const StyledWeather = styled.div``;

const Weather = ({ weather, temperature }) => {
  return (
    <StyledWeather>
      <div>
        <h3>{temperature} °C</h3>
        {weather === 'cloud' && <Cloud />}
        {weather === 'rain' && <Rain />}
        {weather === 'snow' && <Snow />}
        {weather === 'sun' && <Sun />}
        {weather === 'wind' && <Wind />}
      </div>
    </StyledWeather>
  );
};

export default Weather;
