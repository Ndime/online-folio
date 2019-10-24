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
                    <li><Link to="/"><Icon name="home-outline" size="xxLarge" />Home</Link></li>
                    <li> <Link to="work"><Icon name="briefcase-outline" size="xxLarge" />Work</Link></li>
                </ul>
              </nav>
              <div className="social-links">
              <ul>
               <li><a href="https://github.com/Ndime" target="_blank" rel="noopener noreferrer"><Icon name="github-outline" size="xxLarge"/>Github</a></li>
               <li><a href="https://www.linkedin.com/in/terencendime/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin-outline" size="xxLarge" />LinkedIn</a></li>
           </ul>
              </div>
          </div>  
        );
    }
}

export default Sidebar;