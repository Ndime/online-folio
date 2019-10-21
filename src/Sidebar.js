import React,{Component} from 'react';
import Icon from "react-eva-icons";
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
                    <li><Icon name="home-outline" size="xxLarge" animation={{type: "pulse", hover: true, infinite: true }}/>Home</li>
                    <li><Icon name="briefcase-outline" size="xxLarge" animation={{type: "pulse", hover: true, infinite: true }}/>Work</li>


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