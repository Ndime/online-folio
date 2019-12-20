import React, {Component} from 'react';
import Ticker from "react-ticker"

import image1 from "./../../assets/images/1.jpg"


class MoveStuffTicker extends Component{

    render(){
        return(
<>
         <Ticker speed={2}>

               
<img src={image1} alt=""/>
<img src={image1} alt=""/>
<img src={image1} alt=""/>


</Ticker>
        </>
        )
        
    }
   
}

export default MoveStuffTicker