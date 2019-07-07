import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    
    if(!song){
        return <div>Select the song</div>
    }
    return(
        <div>{song.title}</div>
    )
}

const MapStateToProps = (state) => {
   // console.log(state)
    return {song: state.songSelected}
}

export default connect(MapStateToProps)(SongDetail);