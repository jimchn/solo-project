import React, { Component } from 'react';
import TwitterRender from './TwitterRender.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
        };
    }
    
    //Fetches the data from the backend
    componentDidMount() {
        fetch('/fetchData').
        then(response => response.json())
        .then(dataBack => {
            this.setState({ tweets: dataBack })
        })
        .catch(err => console.log(err))
    }


    render() {

        const tweetArr = [];
        for(let i = 0; i < this.state.tweets.length; i++) {
            tweetArr.push(
                <TwitterRender 
                    key={'tweet' + `${i}`}
                    tweet={this.state.tweets[i]}
                />
            )
        }
        return ( 
            <div>
                <h1>Corona Virus Twitter Update</h1> 
                {tweetArr}
            </div>
        )
    }
}

export default App;