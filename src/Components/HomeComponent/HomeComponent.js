import React,{Component} from 'react';
import './HomeComponent.css';

class Home extends Component{
    handleScroll(){
        let body = document.querySelector("body");
        body.style.color = "black";
    }

    render(){
        return(
            <div className="home-background" onScroll={this.handleScroll.bind(this)}>
                
            </div>
        );
    }
}

export default Home