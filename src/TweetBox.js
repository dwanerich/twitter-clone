import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';


function TweetBox() {
    return (
        <div className="tweetBox">
            
            <form>
                <div className="TweetBox">
                    <Avatar src="https://pbs.twimg.com/media/D-p1E03XUAAsDoa?format=jpg&name=small"></Avatar>
                    <input placeholder="What's happening?"></input>
                    <br />
                <Button variant="outlined" className="TweetBox">Tweet</Button>

                </div>
            </form>
        </div>
    )
    
}

export default TweetBox