import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom"

import Body from "./components/body/Body"
import Sidebar from "./components/sidebar/Sidebar"

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="site-wrapper">
        <BrowserRouter>
        <Body/>
        <Sidebar/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
