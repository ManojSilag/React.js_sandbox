import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    //console.log(props.videos);
    
    const list = props.videos.map(video =>{
        //console.log(video.id.videoId);
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect}/>

    })
    return (
        <div className="ui relaxed divided list">
            {list}
        </div>)
}

export default VideoList;