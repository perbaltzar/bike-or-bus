import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import Button from './Button';
import Results from './Results';
import Weather from './Weather';

const StyledMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Main = ({ settings, setSettings }) => {
  console.log(settings);
  return (
    <StyledMain>
      <Headline destination={'Yrgo'} />
      <Results vehicle="bus" reason={'Too Cold'} />
      <Button text={"Let's Check"} />
      <WeatherContainer>  
        <Weather headline="To" weather={'rain'} temperature={'3'} />
        <Weather headline="Home" weather={'snow'} temperature={'3'} />
      </WeatherContainer>
    </StyledMain>
  );
};

export default Main;
