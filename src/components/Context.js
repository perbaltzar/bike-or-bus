import React, { useEffect, useState, useContext, createContext } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [userSettings, setUserSettings] = useState({});

  useEffect(() => {
    const fromLocalstorage = localStorage.getItem('SETTINGS');
    if (fromLocalstorage != null) {
      setUserSettings(JSON.parse(fromLocalstorage));
    } else {
      const defaultSettings = {
        location: {
          longitude: 11.9895,
          latitude: 57.7204,
          name: 'Yrgo',
        },
        criteria: {
          maxWind: 0, // 0 = disabled
          minTemp: 5,
          maxTemp: 0, // 0 = disabled
          weathers: ['clear', 'cloudy'], // drizzle, rain, snowy, windy, freezing rain, etc.
        },
      };
      setUserSettings(defaultSettings);
    }
  }, []);

  return (
    <SettingsContext.Provider value={{ userSettings, setUserSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useUserSettings = () => useContext(SettingsContext);

export { SettingsProvider, useUserSettings };
