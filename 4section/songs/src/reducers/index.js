import { combineReducers } from 'redux';

const songReducer = () => {

    return [
        {title: 'AAAA', duration: '1:20'},
        {title: 'BBBB', duration: '2:20'},
        {title: 'CCCC', duration: '3:30'},
        {title: 'DDDD', duration: '5:30'}
    ]
}

const songsSelectedReducer = (songSelected=null, action)=>{
    
    if(action.type === 'SONG_SELECTED'){
        return action.Payload
    }
    return songSelected;
}

export default combineReducers({
    songs: songReducer,
    songSelected: songsSelectedReducer
});