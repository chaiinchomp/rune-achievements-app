import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Achievements from './pages/Achievements';
import About from './pages/About';

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
