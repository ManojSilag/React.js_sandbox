import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    
    if(!song){
        return <div>Select the song</div>
    }
    return(
        <div>
        <h3>Details for:</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const MapStateToProps = (state) => {
   // console.log(state)
    return {song: state.songSelected}
}

export default connect(MapStateToProps)(SongDetail);