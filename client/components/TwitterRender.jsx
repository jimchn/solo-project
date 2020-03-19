import React, { Component } from 'react';

class TwitterRender extends Component {

    render() {
        return(
            <div>
                <b>Tweet/Retweet:</b> { this.props.tweet.text }
                <br/>
                <b>Twitter Handle:</b> { this.props.tweet.user.screen_name}
                <hr/>
            </div>
        )
    }
}


export default TwitterRender;