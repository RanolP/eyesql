import { ThemeProvider } from '@xstyled/emotion';
import { ColorModeProvider, Preflight } from '@xstyled/emotion';
import { Provider } from 'jotai';
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
        <Provider>
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
        </Provider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
