import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import App from './containers/App';
import { createHistory } from 'history'

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={createHistory('/')}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="about" component={AboutPage} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
