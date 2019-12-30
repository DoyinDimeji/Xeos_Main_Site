import React, { Component } from 'react';
import './ProfileComponent.css'

class Profile extends Component{
    mouseOver(e){
        var allBoxes = document.querySelectorAll(".scroll>div");
        for(let i = 0; i < allBoxes.length; i++){
            if(allBoxes[i] !== e.target){
                allBoxes[i].style.boxShadow = "none";
            }
            else{
                allBoxes[i].style.boxShadow = "10px 10px 60px rgba(0,0,0,.2)";
            }
        }
    }
    
    mouseOut(){
        var allBoxes = document.querySelectorAll(".scroll>div");
        for(let i = 0; i < allBoxes.length; i++){
            allBoxes[i].style.boxShadow = "10px 10px 50px rgba(0,0,0,.1)";
        }
    }

    render(){
        return(
            <div className="profile-container">
                <p>WHAT WE DO</p>
                <div className="scroll">
                    <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}><p>Film</p></div>
                    <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}><p>Game</p></div>
                    <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}><p>Comic</p></div>
                    <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}><p>Advertisement</p></div>
                </div>
                <div className="bg"></div>
            </div>
        )
    }
}

export default Profile