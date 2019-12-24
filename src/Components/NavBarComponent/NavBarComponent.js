import React, { Component } from "react";
import "./NavBarComponent.css";
import logo_teal from "../../Images/SVG/Xeos_logo_teal.svg";
import { CSSTransition } from "react-transition-group";

class NavBar extends Component {
  state = {
    isMenuOpen: false,
    tabs: ["Home", "Our Story", "Portfolio", "Featured", "Career", "Blog"]
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

  selectedTab = (name) => {
    this.props.selectTab(name);
    document.body.style.overflow = "scroll";
    setTimeout(() => {
      this.setState({
        isMenuOpen: false
      });
    }, 500)
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
              <div></div>
              <div></div>
              <div></div>
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