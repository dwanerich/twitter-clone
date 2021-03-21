import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'


function Feed() {
   
    return (
        <>

        <div className="feed__header">
            <h2> Home</h2>
        </div>
        <div className="feed">

            <TweetBox />

            {/* <h2>This is a Tweet</h2> */}

            {/* Header */}
            {/* TweetBox */}

            <Post />
            <Post />
            <Post />

            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}

            
    </div>
    </>
    )
}


export default Feed