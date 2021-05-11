import React, { useState }from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import { SettingsPowerTwoTone } from '@material-ui/icons';



function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Ruby on Richie',
            username: 'rubyOnRichie',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGL_NivPWSPiQ/profile-displayphoto-shrink_800_800/0/1617505553301?e=1625702400&v=beta&t=ToKaWMp0ok842ePro-gFEXPU5Nl7SnpiKtHnH5Y8SvE"

        });

        setTweetMessage("");
        setTweetImage("")
    };

    return (
        <div className="tweetBox"> 
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGL_NivPWSPiQ/profile-displayphoto-shrink_800_800/0/1617505553301?e=1625702400&v=beta&t=ToKaWMp0ok842ePro-gFEXPU5Nl7SnpiKtHnH5Y8SvE"/>
                    
                    <input onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What's happening?" type="text" />
                    </div>
                    <input

                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                    />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox