import React, {Component} from "react"
import {Router} from "@reach/router"

import Work from "../work/Work"
import Home from "../home/Home"
import NotFound from "../notfound/NotFound"

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