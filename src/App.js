import React,{Component} from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import BottomBar from './Components/BottomBarComponent/BottomBarComponent';
import HomeBackground from './Components/HomeBackgroundComponent/HomeBackgroundComponent';
import Story from './Components/StoryComponent/StoryComponent';
import Portfolio from './Components/PortfolioComponent/PortfolioComponent';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <NavBar/>
        <BottomBar/>
        <HomeBackground/>
        <Story/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
