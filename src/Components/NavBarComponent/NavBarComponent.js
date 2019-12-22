import React,{Component} from 'react';
import './NavBarComponent.css';
import logo_teal from '../../Images/SVG/Xeos_logo_teal.svg';

class NavBar extends Component{
    render(){
        return(
            <nav className="home-nav">
                <img id="logo" src={logo_teal} alt="home" height="20" width="20"></img>
                <div className="nav-right">
                    <p>Blog</p>
                    <p>Projects</p>
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