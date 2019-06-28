import React,{Component} from 'react';
import './NavBarComponent.css';
import logo from '../../Images/SVG/Xeos_logo_teal.svg';

class NavBar extends Component{
    render(){
        return(
            <nav className="home-nav">
                <img src={logo} alt="home"></img>
                <div className="nav-right">
                    <p>Blog</p>
                    <p>Portfolio</p>
                    <div className="menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar