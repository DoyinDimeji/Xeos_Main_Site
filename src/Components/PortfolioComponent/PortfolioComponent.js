import React,{Component} from 'react';
import './PortfolioComponent.css';

class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio">
                <h1>PORTFOLIO</h1>
                <div className="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Portfolio