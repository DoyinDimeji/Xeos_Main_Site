import React, { Component } from "react";
import "./NavBarComponent.css";
import logo_teal from "../../Images/SVG/Xeos_logo_teal.svg";
import { CSSTransition } from "react-transition-group";

class NavBar extends Component {
  state = {
    isMenuOpen: false
  };

  menuDrop() {
    this.setState(
      prevState => ({
        isMenuOpen: !prevState.isMenuOpen
      }),() => {
          if(this.state.isMenuOpen){
              document.body.style.overflow = "hidden";
            }
            else{
              document.body.style.overflow = "scroll";
          }
      });
  }

  render() {
    return (
      <>
        <nav className="home-nav">
          <img id="logo" src={logo_teal} alt="home" height="20" width="20"></img>
          <div className="nav-right">
            <div className="menu-btn" onClick={this.menuDrop.bind(this)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <CSSTransition
              in={this.state.isMenuOpen}
              timeout={150}
              classNames="menu-open">
              <div className={`menu`} ref={ref => (this.menuBoxRef = ref)}>
                  <h1 className="title">MENU</h1>
                  <div className="content">
                      <ul>
                          <li className={`${this.props.positionString === "Home" ? "active-menu-tab" : "" }`}>Home</li>
                          <li className={`${this.props.positionString === "Our Story" ? "active-menu-tab" : "" }`}>Our Story</li>
                          <li className={`${this.props.positionString === "Portfolio" ? "active-menu-tab" : "" }`}>Portfolio</li>
                          <li className={`${this.props.positionString === "Featured" ? "active-menu-tab" : "" }`}>Featured</li>
                          <li className={`${this.props.positionString === "Career" ? "active-menu-tab" : "" }`}>Career</li>
                          <li className={`${this.props.positionString === "Blog" ? "active-menu-tab" : "" }`}>Blog</li>
                      </ul>
                  </div>
              </div>
          </CSSTransition>
        </nav>
      </>
    );
  }
}

export default NavBar;
