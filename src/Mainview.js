import React, {Component} from "react"
import {Router} from "@reach/router"

import Work from "./Work"
import Home from "./Home"
import NotFound from "./NotFound"

import "./Mainview.css"

class Mainview extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="mainview">
                <Router>
                    <Home path="/"/>
                    <Work path="work"/>
                    <NotFound default/>
                </Router>
            </div>
        );
    }
}

export default Mainview;