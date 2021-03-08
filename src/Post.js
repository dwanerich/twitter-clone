import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ 
        displayName,
        username,
        verified,
        text, 
        image,
        avatar
    }) {
    return <div className="post">
        <div className="post__avatar">
            <Avatar src="https://pbs.twimg.com/media/D-p1E03XUAAsDoa?format=jpg&name=small" />
        </div>

        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Dwane Richards{" "}
                        <span>
                            <VerifiedUserIcon className="post__badge" />
                        </span> @rubyonrichie • 10m
                    </h3>
                    <div className="post__description">
                        <p>I Jack'd Twitter today for all it's components & everything else underneath it's hood.</p>
                        <img src="https://media3.giphy.com/media/Pjl4DxTIeFdBsxJuFr/giphy.gif"
                        alt=""/>
                    </div>

                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    </div>   
}

export default Post