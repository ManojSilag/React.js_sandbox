import React , {Component}from 'react';
import {connect} from 'react-redux';

class SongsList extends Component{
    render(){
        console.log(this.props);
        
        return(
            <div>
            hELLOOOOOOOO
            </div>
        )
    }
}


const MapStateToProps = (state) => {
    //console.log(state);
    return { songs: state.songs}
} 

export default connect(MapStateToProps)(SongsList);