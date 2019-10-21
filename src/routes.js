import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Achievements from './achievements/Achievements';
import About from './about/About';

export default (
  <Route path="/" component={App}>
    <Route path="/achievements" component={Achievements} />
    <Route path="/about" component={About} />
  </Route>
);