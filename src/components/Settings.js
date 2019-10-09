import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Line from './Line';
import { useUserSettings } from './Context';
import WeatherChoice from './WeatherChoice';

const StyledSettings = styled.div`
  height: 97vh;
  width: calc(100vw - 20px);
  position: absolute;
  margin: 10px;
  background-image: ${({ theme }) => theme.background};
  z-index: 90;
  border-radius: 15px;
  border: 7px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  flex-direction: column;
  main {
    width: 100%;
    padding: 15px;
  }
  h5 {
    font-size: 20px;
    text-shadow: 2px 3px 1px ${({ theme }) => theme.darkPurple};
  }
  h4 {
    letter-spacing: 2px;
    font-size: 30px;
    text-shadow: 2px 3px 1px ${({ theme }) => theme.darkPurple};
  }
  form {
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 16px;
    font-family: 'Open Sans';
    margin-bottom: 10px;
  }
  section {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 20px;
    div:first-of-type {
      text-align: right;
    }
  }
  button {
    position: absolute;
    margin-top: calc(100vh - 90px);
    margin-left: calc(60vw - 120px);
  }
`;
const WeatherChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const weathers = ['clear', 'cloudy', 'drizzle', 'rain', 'snow'];
const Settings = ({ settings }) => {
  const { userSettings } = useUserSettings();
  const [chosenWeathers, setChosenWeathers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Initial loading the userSettings
  useEffect(() => {
    if (Object.getOwnPropertyNames(userSettings).length > 0) {
      setChosenWeathers(userSettings.criteria.weathers);
      setLoaded(true);
    }
  }, [userSettings]);

  useEffect(() => {}, []);

  const isChosen = name => {
    return chosenWeathers.includes(name);
  };

  const handleWeatherChoice = choice => {
    if (isChosen(choice)) {
      console.log('chosen');
      setChosenWeathers(chosenWeathers.filter(w => w !== choice));
      console.log(chosenWeathers);
    } else {
      console.log('not choosen');
      setChosenWeathers([...chosenWeathers, choice]);
    }
  };

  return (
    <StyledSettings>
      {loaded && (
        <>
          <h4>Settings</h4>
          <main>
            <h5>Location</h5>
            <Line />
            <section>
              <div>
                <p>Where do you want to go:</p>
                <p>What should we call it:</p>
              </div>
              <div>
                <p>Göteborg</p>
                <p>Yrgo</p>
              </div>
            </section>
          </main>
          <main>
            <h5>Criteria</h5>
            <Line />
            <section>
              <div>
                <p>Coldest you can stand:</p>
                <p>And the warmest:</p>
                <p>Highest wind speed:</p>
              </div>
              <div>
                <p>5 °C</p>
                <p>Don't care</p>
                <p>Don't care</p>
              </div>
            </section>
            <section>
              <div>
                <p>Weather:</p>
              </div>
              <WeatherChoiceContainer>
                {weathers.map((w, i) => (
                  <WeatherChoice
                    key={i}
                    name={w}
                    chosen={isChosen(w)}
                    onClick={() => handleWeatherChoice(w)}
                  />
                ))}
              </WeatherChoiceContainer>
            </section>
          </main>
          <Button text="Save" />
        </>
      )}
    </StyledSettings>
  );
};

export default Settings;
