import React, { Component } from 'react';
import './SideBarComponent.css';

class SideBarComponent extends Component{
    state = {
        tabs: ["Home", "Our Story", "Profile", "Portfolio", "Contact"]
    };

    componentDidUpdate(prevProps, prevState){
        if(prevProps.positionString !== this.props.positionString){
            let sideTabs = document.getElementById("sideBar").querySelectorAll("li");
            if(this.props.positionString === "Our Story" || this.props.positionString === "Profile" || this.props.positionString === "Contact"){
                // let activeTab = document.querySelector(".active-side-tab-white");
                // console.log(activeTab);
                // for (let i = 0; i < sideTabs.length; i++) {
                //     sideTabs[i].style.color = "rgba(0,0,0,.5);";
                // }
                // activeTab.className = "active-side-tab-black";
            }
            else{
                // let activeTab = document.querySelector(".active-side-tab-black");
                // for (let i = 0; i < sideTabs.length; i++) {
                //     sideTabs[i].style.color = "rgba(255,255,255,.5);";
                // }
                // activeTab.className = "active-side-tab-white";
            }
        }
    }

    selectedTab = (tab) => {
        this.props.selectTab(tab);
    }

    render(){ 
        return(
            <div className="side-bar-container">
                <ul ref={ref => (this.sideBarRef = ref)} id="sideBar">
                    {this.state.tabs.map((tab, index) => 
                        <li key={index} onClick={this.selectedTab.bind(this,tab)} 
                            className={`${this.props.positionString === tab ? "active-side-tab-white" : "" }`}>
                                {index + 1}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default SideBarComponent