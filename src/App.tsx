import { ThemeProvider } from '@emotion/react';
import { ColorModeProvider, Preflight } from '@xstyled/emotion';
import { Route, Router, Switch } from 'wouter-preact';
import { CreatePage } from './pages/Create';
import { IndexPage } from './pages/Index';
import { NotFoundPage } from './pages/NotFound';
import { BaseStyle } from './styles/BaseStyle';
import { EyeSqlTheme } from './styles/theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={EyeSqlTheme}>
      <ColorModeProvider>
        <Preflight />
        <BaseStyle />

        <Router>
          <Switch>
            <Route path="/">
              <IndexPage />
            </Route>
            <Route path="/create">
              <CreatePage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
