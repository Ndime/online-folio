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
           
                <div className="section-wrapper">
                    <div className="picture-of-me">
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyLoad>
                        <HomeProfileImage/>
                        </LazyLoad>
                        </Suspense>
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