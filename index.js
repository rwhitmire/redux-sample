import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history'
import App from './containers/App';
import configureStore from './store/configureStore';

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import CounterPage from './containers/CounterPage';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={createHistory()}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="about" component={AboutPage} />
          <Route path="counter" component={CounterPage} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
