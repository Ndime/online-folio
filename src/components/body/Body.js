import React, {Component} from 'react';

import Footer from "../footer/Footer"
import Mainview from "../mainview/Mainview"

import "./Body.css"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="body-wrapper">
            <Mainview/>
            <Footer/>
        </div>
        );
    }
}

export default Body;