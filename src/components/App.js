import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import Main from './Main';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Settings from './Settings';
import { Settings as SettingsIcon } from './icons';
import { SettingsProvider } from './Context';

const App = props => {
  const [settings, setSettings] = useState(true);
  const [info, setInfo] = useState(false);

  // Closing info while opening settings
  const toggleSettings = () => {
    setSettings(!settings);
    setInfo(false);
  };

  //
  const toggleInfo = () => {
    setInfo(!info);
    setSettings(false);
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <SettingsProvider>
          <Layout>
            <SettingsIcon settings={settings} onClick={toggleSettings} />
            {/* <Exclamation info={info} onClick={toggleInfo} />
            {info && <Info />} */}
            {settings && <Settings />}
            <Main />
          </Layout>
        </SettingsProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
