import React, {Component} from 'react';

import Footer from "./Footer"
import Mainview from "./Mainview"

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