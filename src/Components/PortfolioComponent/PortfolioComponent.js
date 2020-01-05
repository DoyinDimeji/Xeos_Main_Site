import React,{Component} from 'react';
import './PortfolioComponent.css';
import { projects } from '../../Data/PortfolioData';

class Portfolio extends Component{
    state = {
        pprojects: projects,
        pproject: projects[0]
    }

    scrollLeft(){
        if(this.state.pproject.id !== 0){
            const newIndex = this.state.pproject.id - 1;
            this.setState({
                pproject: projects[newIndex]
            }, () => {
                this.portfolioRef.style.backgroundImage = `url('${this.state.pproject.img}')`;
            });
        }
    }
    
    scrollRight(){
        if(this.state.pproject.id !== this.state.pprojects.length - 1){
            const newIndex = this.state.pproject.id + 1;
            this.setState({
                pproject: projects[newIndex]
            }, () => {
                this.portfolioRef.style.backgroundImage = `url('${this.state.pproject.img}')`;
            });
        }
    }
    
    render(){
        return(
            <div className="portfolio" ref={ref => (this.portfolioRef = ref)}>
                <h1>PORTFOLIO</h1>
                <div className="boxes">
                    <div className="project-container">
                        <div className="project-container-slider" ref={ref => (this.projectScrollRef = ref)} 
                             style={{
                                 transform: `translateX(-${this.state.pproject.id * 100}%)`
                             }}>
                            {this.state.pprojects.map((pproject) => 
                                <div key={pproject.id} ref={ref => (this.innerDivRef = ref)}>
                                    <p>{pproject.title}</p>    
                                    <p>{pproject.description}</p>
                                </div> 
                            )}
                        </div>
                        <div className="navigate">
                            <button style = {{
                                        color: this.state.pproject.id === 0 ? "rgba(255,255,255,.5)" : "white"
                                    }}
                                    disabled = {this.state.pproject.id === 0}
                                    onClick={this.scrollLeft.bind(this)}>&larr;</button>
                            <button style = {{
                                        color: this.state.pproject.id === this.state.pprojects.length - 1 ? "rgba(255,255,255,.5)" : "white"
                                    }} 
                                    disabled = {this.state.pproject.id === this.state.pprojects.length - 1}
                                    onClick={this.scrollRight.bind(this)}>&rarr;</button>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Portfolio