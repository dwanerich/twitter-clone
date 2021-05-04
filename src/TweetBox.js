import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';



function TweetBox() {
    return (
        <div className="tweetBox"> 
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGL_NivPWSPiQ/profile-displayphoto-shrink_800_800/0/1617505553301?e=1625702400&v=beta&t=ToKaWMp0ok842ePro-gFEXPU5Nl7SnpiKtHnH5Y8SvE"></Avatar>
                    <input placeholder="What's happening?" type="text" />
                    </div>
                    <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                    />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox