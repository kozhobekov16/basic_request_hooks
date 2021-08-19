import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import './App.css';
import { Article } from './Article';
import Bar from './Bar';

function App() {
  return (
    <Router>
      <Switch>
          <Bar/>
          <Route path="/about" component={About}/>
          <Route path="/article" component={Article}/>
      </Switch>
    </Router>
  );
}

export default App;
