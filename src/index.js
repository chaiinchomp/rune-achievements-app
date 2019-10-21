import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './common/index.css';
import App from './App';
import Achievements from './achievements/Achievements';
import About from './about/About';

ReactDOM.render(
  <div>
      <BrowserRouter>
         <Switch>
            <Route path='/' component={App} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/about" component={About} />
         </Switch>
      </BrowserRouter>
  </div>,
  document.getElementById('root')
);
