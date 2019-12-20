import React, { Component, Suspense }  from 'react';
import LazyLoad from 'react-lazyload';

import "./Home.scss"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        const HomeProfileImage = React.lazy(() => import("./HomeProfileImage") )

        return (
            <>
                <div className="section-wrapper">
                    <div className="picture-of-me">
                        <Suspense fallback={<div style={{width:"300px",height:"300px"}}>Loading...</div>}>
                            <LazyLoad>
                        <HomeProfileImage/>
                        </LazyLoad>
                        </Suspense>
                        <div className="circle circle_1"></div>
                        <div className="circle circle_2"></div>
                        <div className="circle circle_3"></div>
                        <div className="circle circle_4"></div>
                        <div className="circle circle_5"></div>
                        <div className="circle circle_6"></div>
                       
                    </div>
                    <div className="about-me-text">
                        <h1>Terence NDIME</h1>
                        <span className="user-title">Frontend / UI / ReactJS Developer</span>
                        <p>5+ years experienced,result-oriented Microsoft certified professional full stack web developer with a proven track record of developing rich internet applications using modern web technologies both on the front and backend.</p>
                    </div>

                    
                </div>
                    <div className="tech-stack">
                    <div className="tech-stack-item">heuryeure</div>
                     <div className="tech-stack-item">ererer</div>
                     <div className="tech-stack-item">sadfdsfs</div>
                     <div className="tech-stack-item">ggr</div>
                        
                    </div>
                </>
           
        );
    }
}

export default Home;