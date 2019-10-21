import React,{Component} from 'react';
import Icon from "react-eva-icons";
import {Link} from "@reach/router"

import "./Sidebar.css"

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div className="sidebar">
              <nav>
                <ul>
                    <li><Link to="/"><Icon name="home-outline" size="xxLarge" animation={{type: "pulse", hover: true, infinite: true }}/>Home</Link></li>
                    <li> <Link to="work"><Icon name="briefcase-outline" size="xxLarge" animation={{type: "pulse", hover: true, infinite: true }}/>Work</Link></li>
                </ul>
              </nav>
              <div className="social-links">
              <ul>
               <li>Github</li>
               <li>LinkedIn</li>
           </ul>
              </div>
          </div>  
        );
    }
}

export default Sidebar;