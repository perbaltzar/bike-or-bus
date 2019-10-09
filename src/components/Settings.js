import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Line from './Line';
import { useUserSettings } from './Context';
import WeatherChoice from './WeatherChoice';
import Input from './Input';

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
  const [name, setName] = useState();
  const [area, setArea] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [maxWind, setMaxWind] = useState();

  // Initial loading the userSettings
  useEffect(() => {
    if (Object.getOwnPropertyNames(userSettings).length > 0) {
      setChosenWeathers(userSettings.criteria.weathers);
      setName(userSettings.location.name);
      setArea(userSettings.location.area);
      if (userSettings.criteria.minTemp !== 0) {
        setMinTemp(`${userSettings.criteria.minTemp} °C`);
      } else {
        setMinTemp("Don't Care");
      }
      if (userSettings.criteria.maxTemp !== 0) {
        setMaxTemp(`${userSettings.criteria.maxTemp} °C`);
      } else {
        setMaxTemp("Don't Care");
      }

      if (userSettings.criteria.maxWind !== 0) {
        setMaxWind(`${userSettings.criteria.maxWind} m/s`);
      } else {
        setMaxWind("Don't Care");
      }
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
                <p>Where about is it:</p>
                <p>What should we call it:</p>
              </div>
              <div>
                <Input value={area} onChange={({ target }) => setArea(target.value)} />
                <Input value={name} onChange={({ target }) => setName(target.value)} />
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
                <Input value={minTemp} onChange={({ target }) => setMinTemp(`${target.value}`)} />
                <Input value={maxTemp} onChange={({ target }) => setMaxTemp(`${target.value}`)} />
                <Input value={maxWind} onChange={({ target }) => setMaxWind(`${target.value}`)} />
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
