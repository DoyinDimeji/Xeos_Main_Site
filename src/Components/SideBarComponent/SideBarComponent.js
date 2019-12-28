import React, { Component } from 'react';
import './SideBarComponent.css';

class SideBarComponent extends Component{
    state = {
        tabs: ["Home", "Our Story", "Portfolio", "Featured", "Career", "Blog"]
    };

    selectedTab = (tab) => {
        this.props.selectTab(tab);
    }

    render(){
        return(
            <div className="side-bar-container">
                <ul ref={ref => (this.sideBarRef = ref)}>
                    {this.state.tabs.map((tab, index) => 
                        <li key={index} onClick={this.selectedTab.bind(this,tab)} 
                            className={`${this.props.positionString === tab ? "active-side-tab" : "" }`}>
                                {index + 1}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default SideBarComponent