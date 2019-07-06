import React from 'react';
import ReactDOM from 'react-dom';

console.log(process.env.SAMPLE);

const App = () => (
  <div>
    <h1>Hello World!</h1>
  </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));