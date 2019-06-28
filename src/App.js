import React,{Component} from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import BottomBar from './Components/BottomBarComponent/BottomBarComponent';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <NavBar/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
