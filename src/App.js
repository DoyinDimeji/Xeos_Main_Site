import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import BottomBar from './Components/BottomBarComponent/BottomBarComponent';
import Home from './Components/HomeComponent/HomeComponent';
import Story from './Components/StoryComponent/StoryComponent';
import Portfolio from './Components/PortfolioComponent/PortfolioComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incrementalScroll: 0,
      onLoadPosition: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.barRef = React.createRef();
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
      portfolioPosition = 2 * h;

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
  }

  handleScroll() {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let homePosition = 0,
      storyPosition = h,
      portfolioPosition = 2 * h;

    let currentPosition = document.documentElement.scrollTop;

    console.log(currentPosition);
    //For BottomBar
    let bottomBar =  document.querySelector(".bottom-bar");
    if (currentPosition < (homePosition + 50)) {
      bottomBar.style.color = "white";
    }
    if (currentPosition > (homePosition + 50)) {
      bottomBar.style.color = "black";
    }
    if (currentPosition > (storyPosition + 50)) {
      bottomBar.style.color = "white";
    }

    //For NavBar
    let navBar =  document.querySelector("nav");
    if (currentPosition < (storyPosition - 50)) {
      navBar.style.color = "white";
    }
    if (currentPosition > (storyPosition - 50)) {
      navBar.style.color = "black";
    }
    if (currentPosition > (portfolioPosition - 50)) {
      navBar.style.color = "white";
    }
  }

  render() {
    return (
      <div className="wrapper" onKeyDown={this.handleClick.bind(this)}>
        <NavBar />
        <BottomBar click={this.handleClick.bind(this)} ref={this.barRef} />
        <Home />
        <Story />
        <Portfolio />
      </div>
    );
  }
}

export default App;
