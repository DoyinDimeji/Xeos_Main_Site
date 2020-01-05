import React, { Component } from "react";
import "./NavBarComponent.css";
import logo_teal from "../../Images/SVG/Xeos_logo_teal.svg";
import { CSSTransition } from "react-transition-group";

class NavBar extends Component {
  state = {
    isMenuOpen: false,
    tabs: ["Home", "Our Story", "Profile", "Portfolio", "Contact"]
  };

  menuDrop() {
    this.setState(
      prevState => ({
        isMenuOpen: !prevState.isMenuOpen
      }),() => {
        let menuBtnBars = document.querySelectorAll(".menu-btn-bar");
        if(this.state.isMenuOpen){
          document.body.style.overflow = "hidden";
          menuBtnBars[0].style.transform = "translateY(3px) rotateZ(45deg)";
          menuBtnBars[1].style.transform = "translateY(-4px) rotateZ(-45deg)";
          menuBtnBars[2].style.opacity = "0";
        }
        else{
          document.body.style.overflow = "scroll";
          document.body.style.scrollbarWidth = "none";
          menuBtnBars[0].style.transform = menuBtnBars[1].style.transform = "";
          menuBtnBars[2].style.opacity = "1";
        }
        
      });
    }
    
  selectedTab = (name) => {
    this.props.selectTab(name);
    document.body.style.overflow = "scroll";
    document.body.style.scrollbarWidth = "none";
    setTimeout(() => {
      this.setState({
        isMenuOpen: false
      });
      let menuBtnBars = document.querySelectorAll(".menu-btn-bar");
      menuBtnBars[0].style.transform = "";
      menuBtnBars[1].style.transform = "";
      menuBtnBars[2].style.opacity = "1";
    }, 600)
  }

  mouseMoved(e){
    let buffer = (e.clientX/window.innerWidth) * 100;
    if(buffer >= 90){
      this.menuSlideRef.scrollLeft += 30;
    }
    else if(buffer <= 10){
      this.menuSlideRef.scrollLeft -= 30;
    }
  }

  render() {
    return (
      <>
        <nav className="home-nav">
          <img id="logo" src={logo_teal} alt="home" height="20" width="20"></img>
          <div className="nav-right">
            <div className="menu-btn" onClick={this.menuDrop.bind(this)}>
              <div className="menu-btn-bar"></div>
              <div className="menu-btn-bar"></div>
              <div className="menu-btn-bar"></div>
            </div>
          </div>
          <CSSTransition
              in={this.state.isMenuOpen}
              timeout={150}
              classNames="menu-open">
              <div className={`menu`}>
                  <h1 className="title">MENU</h1>
                  <div className="content"   ref={ref => (this.menuSlideRef = ref)}>
                      <ul onMouseMove={this.mouseMoved.bind(this)}>
                        {this.state.tabs.map((tab,index) => 
                          <li key={index} className={`${this.props.positionString === tab ? "active-menu-tab" : "" }`} onClick={this.selectedTab.bind(this,tab)}>{tab}</li>
                        )}
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