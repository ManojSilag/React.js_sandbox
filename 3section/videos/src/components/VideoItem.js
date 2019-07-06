import React from 'react';

const VideoItem = props => {
    console.log(props.video.snippet.thumbnails.medium);
    
    return (
        <div>
            <img src = {props.video.snippet.thumbnails.medium.url}></img>
            <div>{props.video.snippet.title}</div>
        </div>
    )
}

export default VideoItem;