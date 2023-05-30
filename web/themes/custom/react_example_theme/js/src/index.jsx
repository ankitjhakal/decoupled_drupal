import React from 'react';
import ReactDOM from 'react-dom';
/* Import Components */
import DrupalProjectStats from './components/DrupalProjectStats';

const Main = () => (
  <DrupalProjectStats projectName="drupal" />
);

ReactDOM.render(<Main/>, document.getElementById('react-app-2'));
// Example 1: Simple "Hello, World" code
ReactDOM.render(
  <h1>Hello there - world!</h1>,
  document.getElementById('react-app')
);


