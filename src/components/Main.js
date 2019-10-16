import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import Button from './Button';
import Results from './Results';
import Weather from './Weather';
import { useUserSettings } from './Context';

const StyledMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Main = ({ settings, setSettings }) => {
  const [showResults, setShowResults] = useState(false);
  const { userSettings } = useUserSettings();

  return (
    <StyledMain>
      <Headline destination={'Yrgo'} />
      <Results vehicle="bus" reason={'Go by bike!'} showResults={showResults} />
      <Button text={"Let's Check"} onClick={() => setShowResults(!showResults)} />
      <WeatherContainer>
        <Weather headline="To" weather={'wind'} temperature={'3'} windspeed={4.3} rain={0} />
        <Weather headline="Home" weather={'snow'} temperature={'3'} />
      </WeatherContainer>
    </StyledMain>
  );
};

export default Main;
