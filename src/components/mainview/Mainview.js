import React from "react"
import {Routes, Route} from "react-router-dom"
import Work from "../work/Work"
import Home from "../home/Home"
import NotFound from "../notfound/NotFound"

import "./Mainview.css"

export default function Mainview() {
    return (
        <div className="mainview">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="*" element={<NotFound />} />                
            </Routes>
            
        </div>
    );
}