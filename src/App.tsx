import { ThemeProvider } from '@emotion/react';
import { Preflight } from '@xstyled/emotion';
import { Route, Router, Switch } from 'wouter-preact';
import { IndexPage } from './pages/Index';
import { NotFoundPage } from './pages/NotFound';
import { EyeSqlTheme } from './styles/theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={EyeSqlTheme}>
      <Preflight />

      <Router>
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
