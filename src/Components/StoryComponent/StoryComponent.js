import React, { Component } from 'react';
import './StoryComponent.css';

class Story extends Component {
    render() {
        return (
            <div className="our-story" id="storyComponent">
                <h1>WHO WE ARE</h1>
                <p>From the earliest men to date, stories have been an important part of our existence. Be it around a
                    campfire, on a cave wall, on paper, or on-screen; stories are everywhere, in every form and told through
                    various
                    means. At Xeos Studios, we are committed to telling you stories, whatever the medium.</p>
                <p>We. Are. Storytellers.</p>
                <a>Learn More</a>
            </div>
        );
    }
}

export default Story