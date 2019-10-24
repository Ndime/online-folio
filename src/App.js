import React, {Component} from 'react';

import Body from "./components/body/Body"
import Sidebar from "./components/sidebar/Sidebar"
import folioData from "./data/folio"

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="site-wrapper">
        <Body/>
        <Sidebar/>
      </div>
    )
  }
}

export default App;
