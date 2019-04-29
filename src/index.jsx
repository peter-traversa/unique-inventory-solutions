import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const App = () => (
  <Provider>
    <div>
      <h1>Hello World!</h1>
    </div>
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
