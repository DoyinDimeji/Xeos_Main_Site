import React,{Component} from 'react';
import './BottomBarComponent.css';

class BottomBar extends Component{
    render(){
        return(
            <div className="bottom-bar">
                <p>XEOS <span>STUDIOS</span></p>
                <p>A Home Of <span>Storytellers</span></p>
                <p className="fas fa-angle-down"></p>
            </div>
        );
    }
}

export default BottomBar