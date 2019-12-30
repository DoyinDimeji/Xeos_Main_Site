import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import BottomBar from './Components/BottomBarComponent/BottomBarComponent';
import Home from './Components/HomeComponent/HomeComponent';
import Story from './Components/StoryComponent/StoryComponent';
import Portfolio from './Components/PortfolioComponent/PortfolioComponent';
import logo_teal from './Images/SVG/Xeos_logo_teal.svg';
import logo_black from './Images/SVG/Xeos_logo_black.svg';
import logo_white from './Images/SVG/Xeos_logo_white.svg';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';
import Contact from './Components/ContactComponent/ContactComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incrementalScroll: 0,
      onLoadPosition: 0,
      positionString: "Home"
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.barRef = React.createRef();
  }

  selectTab = (name) => {
    this.setState({
      positionString: name
    },() => {
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      let homePosition = 0,
        storyPosition = h,
        portfolioPosition = 2 * h,
        contactPosition = 3 * h;

      switch(name){
        case "Home": 
          return document.documentElement.scrollTop = homePosition;
        case "Our Story": 
          return document.documentElement.scrollTop = storyPosition;
        case "Portfolio": 
          return document.documentElement.scrollTop = portfolioPosition;
        case "Contact": 
          return document.documentElement.scrollTop = contactPosition;
        default:
          return document.documentElement.scrollTop = homePosition;
      }
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      currentPosition: document.documentElement.scrollTop
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick() {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let currentPosition = document.documentElement.scrollTop,
      homePosition = 0,
      storyPosition = h,
      portfolioPosition = 2 * h,
      contactPosition = 3 * h;

    if (currentPosition >= homePosition && currentPosition < storyPosition) {
      this.setState({
        incrementalScroll: storyPosition
      }, () => {
        document.documentElement.scrollTop = this.state.incrementalScroll;
      });
    }

    else if (currentPosition >= storyPosition && currentPosition < portfolioPosition) {
      this.setState({
        incrementalScroll: portfolioPosition
      }, () => {
        document.documentElement.scrollTop = this.state.incrementalScroll;
      });
    }

    else if (currentPosition >= portfolioPosition && currentPosition < contactPosition) {
      this.setState({
        incrementalScroll: contactPosition
      }, () => {
        document.documentElement.scrollTop = this.state.incrementalScroll;
      });
    }
  }

  handleScroll() {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let homePosition = 0,
      storyPosition = h,
      portfolioPosition = 2 * h,
      contactPosition = 3 * h,
     currentPosition = document.documentElement.scrollTop;

     console.log(currentPosition);
    //For BottomBar
    let bottomBar = document.querySelector(".bottom-bar");
    let span = document.querySelector("span");
    let identity = document.querySelector("#identity");
    let skip = document.querySelector("#skipNav");
    if (currentPosition < (homePosition + 50)) {
      bottomBar.style.color = "white";
      span.style.color = "#00C6A0";
      identity.style.display = "block";
      skip.style.animation = "levitate 1.5s linear infinite";
      skip.innerHTML = "&darr;"
      skip.style.fontSize = "2em";
      this.setState({
        positionString: "Home"
      });
    }
    if (currentPosition > (homePosition + 50) || currentPosition > (contactPosition + 50)) {
      console.log("goat");
      bottomBar.style.color = "black";
      span.style.color = "black";
      identity.style.display = "none";
      skip.style.animation = "none";
      skip.innerHTML = "Next";
      skip.style.fontSize = "1em";
      this.setState({
        positionString: "Our Story"
      });
    }
    if (currentPosition > (storyPosition + 50)) {
      bottomBar.style.color = "white";
      span.style.color = "white";
      identity.style.display = "none";
      skip.style.animation = "none";
      this.setState({
        positionString: "Portfolio"
      });
    }

    //For NavBar
    let navBar = document.querySelector("nav");
    let logo = document.querySelector("#logo");
    let menuBars = document.querySelector(".menu-btn").children;
    if (currentPosition < (storyPosition - 50)) {
      navBar.style.color = "white";
      logo.src = logo_teal;
      for (var i = 0; i < menuBars.length; i++) {
        menuBars[i].style.background = "#00C6A0"
      }
    }
    if (currentPosition > (storyPosition - 50) || currentPosition > (contactPosition - 50)) {
      navBar.style.color = "black";
      logo.src = logo_black;
      for (var i = 0; i < menuBars.length; i++) {
        menuBars[i].style.background = "black"
      }
    }
    if (currentPosition > (portfolioPosition - 50)) {
      navBar.style.color = "white";
      logo.src = logo_white;
      for (var i = 0; i < menuBars.length; i++) {
        menuBars[i].style.background = "white"
      }
    }
  }

  render() {
    return (
      <div className="wrapper" onKeyDown={this.handleClick.bind(this)}>
        <NavBar positionString={this.state.positionString} selectTab={this.selectTab}/>
        <SideBarComponent positionString={this.state.positionString} selectTab={this.selectTab}/>
        <BottomBar click={this.handleClick.bind(this)} ref={this.barRef} />
        <Home />
        <Story />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;