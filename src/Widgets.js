import React from 'react'
import './Widgets.css'
import { Tweet, Timeline, Share } from 'react-twitter-widgets'

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <Tweet tweetId="1367202325744525322" />
                <Timeline
                    dataSource={{
                    sourceType: 'profile',
                    screenName: '1batdotus'
                }}
                    options={{
                    height: '400'
                }}
                />

                <Share
                url={"http://linkedin.com/in/dwanerich"}
                options={{ text: "#Jack'd the Big homie", via: "http://dwanerich.com"}}
                />
                

            </div>
            
        </div>
    );
}


export default Widgets;