

//Action creator
export const selectSong = song => {
    //return an anction
    return {
        type:'SONG_SELECTED',
        Payload: song
    };
};