import React from 'react';
import {HashRouter} from "react-router-dom"

import Body from "./components/body/Body"
import Sidebar from "./components/sidebar/Sidebar"

import './App.css';

export default function App(){
    return (
      <div className="site-wrapper">
        <HashRouter basename="/">
        <Body/>
        <Sidebar/>
        </HashRouter>
      </div>
    )
}
