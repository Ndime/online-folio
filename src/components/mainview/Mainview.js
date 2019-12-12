import React, {Component} from "react"
import {Switch, Route} from "react-router-dom"

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
                
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route exact path="/work">
                        <Work/>
                    </Route>
                    
                    <Route>
                    <NotFound default/>
                    </Route>
                   
                    
                </Switch>
                
            </div>
        );
    }
}

export default Mainview;