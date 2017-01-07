import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import configureStore from './store/configureStore';

injectTapEventPlugin(); // For Material UI

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
