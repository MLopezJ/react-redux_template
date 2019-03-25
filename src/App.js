import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Projects from './containers/Projects'


class App extends Component {
  render() {
    return (

      <BrowserRouter> 

      <Route exact path='/' render={ ()=> <Projects /> } />

      </BrowserRouter> 
      

    );
  }
}

export default App;
