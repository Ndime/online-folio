import React, { Component } from 'react';

import * as Myphoto from "../../assets/images/terence.jpg"

import "./Home.scss"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="firstsection-wrapper">
                    <div className="picture-of-me">
                        <img width={500} src={Myphoto} title="terence Ndime" alt="Portrait of me"/>
                    </div>
                    <div className="about-me-text">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;