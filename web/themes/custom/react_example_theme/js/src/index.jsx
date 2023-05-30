import React from 'react';
import ReactDOM from 'react-dom';
/* Import Components */
import NodeListOnly from "./components/NodeListOnly";
import DrupalProjectStats from './components/DrupalProjectStats';

const ProjectStats = () => (
  <DrupalProjectStats projectName="drupal" />
);
const NodeList = () => (
  <NodeListOnly />
);

ReactDOM.render(<NodeList/>, document.getElementById('node-list'));
ReactDOM.render(<ProjectStats/>, document.getElementById('project-stats'));
// Example 1: Simple "Hello, World" code
ReactDOM.render(
  <h1>Hello there - world!</h1>,
  document.getElementById('react-app')
);


