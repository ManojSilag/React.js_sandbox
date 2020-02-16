
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'abcdef' , duration: '4.05'},
        {title: 'ghijk' , duration: '1.05'},
        {title: 'lmno' , duration: '5.03'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
})

