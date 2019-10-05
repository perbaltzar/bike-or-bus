import React from 'react';
import styled from 'styled-components';
import { Cloud, Rain, Snow, Sun, Wind } from './icons';
const StyledWeather = styled.div`
  width: 40vw;
  height: 35vw;
  color: ${({ theme }) => theme.text};
  h4 {
    font-size: 20px;
    font-weight: 400;
  }
  section {
    height: 80%;
    border: 7px solid ${({ theme }) => theme.text};
    border-radius: 15px;
    background-image: linear-gradient(to top right, #42152e, #5c3048);
    display: flex;
    justify-content: space-around;
    padding: 10px;
    align-items: center;
    div:nth-child(2) {
      svg {
        width: 15vw;
        height: auto;
      }
    }
  }
`;

const Weather = ({ headline, weather, temperature, windspeed, rain }) => {
  return (
    <StyledWeather>
      <h2>{headline}</h2>
      <section>
        <div>
          <h4>{temperature} °C</h4>
          {/* <h4>{windspeed} m/s</h4>
          <h4>{rain} mm</h4> */}
        </div>
        <div>
          <i>{weather === 'cloud' && <Cloud />}</i>
          <i>{weather === 'rain' && <Rain />}</i>
          <i>{weather === 'snow' && <Snow />}</i>
          <i>{weather === 'sun' && <Sun />}</i>
          <i>{weather === 'wind' && <Wind />}</i>
        </div>
      </section>
    </StyledWeather>
  );
};

export default Weather;
