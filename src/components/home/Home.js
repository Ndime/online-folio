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
           
                <div className="section-wrapper">
                    <div className="picture-of-me">
                        <img src={Myphoto} title="terence Ndime" alt="Portrait of me"/>
                    </div>
                    <div className="about-me-text">
                        <h1>Terence NDIME</h1>
                        <p>5+ years experienced,result-oriented Microsoft certified professional full stack web developer with a proven track record of developing rich internet applications using modern web technologies both on the front and backend.</p>
                    </div>
                </div>
           
        );
    }
}

export default Home;