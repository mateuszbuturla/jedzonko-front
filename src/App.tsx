import { FC, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { store } from './config/redux/store';
import { theme } from './config/chakra/theme';

export const history = createBrowserHistory({ basename: '/' });

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Login = lazy(() => import('./pages/Login'));

const App: FC = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme} resetCSS>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/error" component={ErrorPage} />
            <Route render={() => <Redirect to="/error" />} />
          </Switch>
        </Suspense>
      </Router>
    </ChakraProvider>
  </Provider>
);

export default App;
