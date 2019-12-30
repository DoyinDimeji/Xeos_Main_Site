import React, { Component } from 'react';
import './ContactComponent.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact-container">
                <div>
                    <p>REACH OUT TO US</p>
                    <a href="mailto:info@xeosstudios.xyz" target="_top">info@xeosstudios.xyz</a>
                    <p>Phone</p>
                    <p>+234 908 003 0221</p>
                </div>
                <div className="socials">
                    <ul>
                        <li><a href="https://www.instagram.com/xeosstudios" target="_blank"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="https://www.youtube.com/channel/UCYQWUVXpijYdO2_aSC2tMxg" target="_blank"><span className="fab fa-youtube"></span></a></li>
                        <li><a href="https://twitter.com/XeosStudios" target="_blank"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="https://www.linkedin.com/company/xeos-studios" target="_blank"><span className="fab fa-linkedin-in"></span></a></li>
                        <li><a href="https://www.facebook.com/xeosstudios/" target="_blank"><span className="fab fa-facebook-f"></span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact