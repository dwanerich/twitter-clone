import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <>

        <div className="feed__header">
            <h2> Home</h2>
        </div>
        <div className="feed">

            <TweetBox />

            <Post
            displayName="Dwane Richards"
            username="dwanerich"
            verified={true}
            text="Jack'd Twitter today for all it's components & everything else underneath the hood : )"
            avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGL_NivPWSPiQ/profile-displayphoto-shrink_800_800/0/1617505553301?e=1625702400&v=beta&t=ToKaWMp0ok842ePro-gFEXPU5Nl7SnpiKtHnH5Y8SvE"
            image="https://media3.giphy.com/media/Pjl4DxTIeFdBsxJuFr/giphy.gif"
            />


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