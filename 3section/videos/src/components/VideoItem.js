import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    //console.log(props.video.snippet.thumbnails.medium);
    //console.log(props);
    
    return (
        <div className="video-item item" onClick={()=>props.onVideoSelect(props.video)}>
            <img className="ui image" src = {props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}></img>
            <div className="content">
            <div className="header"> {props.video.snippet.title} </div>
            </div>
        </div>
    )
}

export default VideoItem;