import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import Main from './Main';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';

const App = props => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>
          <Router>
            <Switch>
              <Route path="/" component={Main} />
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
