import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import Main from './Main';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Settings from './Settings';
import { Settings as SettingsIcon } from './icons';

const App = props => {
  const [settings, setSettings] = useState(false);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>
          <SettingsIcon settings={settings} onClick={() => setSettings(!settings)} />
          {settings && <Settings />}
          <Main />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
