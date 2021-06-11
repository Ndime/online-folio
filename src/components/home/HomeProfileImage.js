import React, { Component } from 'react';

import Myphoto from "../../assets/images/terence.jpg"


class HomeProfileImage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        return (
            <img src={Myphoto} title="terence Ndime" alt="Portrait of me"/>
        );
    }
}

export default HomeProfileImage;