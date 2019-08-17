import React, { Component } from 'react';
import './BottomBarComponent.css';

class BottomBar extends Component {
    render() {
        return (
            <div className="bottom-bar">
                <p>XEOS <span>STUDIOS</span></p>
                <p id="identity">A Home Of <span>Storytellers</span></p>
                <p id="skipNav" onClick={this.props.click}>&darr;</p>
            </div>
        );
    }
}

export default BottomBar