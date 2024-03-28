import React from 'react';

import Footer from "../footer/Footer"
import Mainview from "../mainview/Mainview"

import "./Body.css"

export default function Body() {
    return (
        <div className="body-wrapper">
            <Mainview/>
            <Footer/>
        </div>
    );
}