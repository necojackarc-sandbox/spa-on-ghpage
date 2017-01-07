import React, { PropTypes } from 'react';

import AppBar from './AppBar';
import Home from './Home';

export default function App(props) {
  return (
    <div>
      <AppBar />
      <div style={{ margin: '8px' }}>
        {props.children || <Home />}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};
