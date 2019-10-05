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
  const [settings, setSettings] = useState(false);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <SettingsProvider>
          <Layout>
            <SettingsIcon settings={settings} onClick={() => setSettings(!settings)} />
            {settings && <Settings />}
            <Main />
          </Layout>
        </SettingsProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
