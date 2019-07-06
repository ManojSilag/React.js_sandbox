import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = { videos: [] }
    }

    OnTermSubmit =async term=> {
        
        const response = await youtube.get('/search',{
            params:{ q: term },
        });

        //console.log(response);
        this.setState({ videos: response.data.items })
        //console.log(response.data.items);
        
    }
    render(){
        return (
            <div className="ui container">
            <SearchBar onFormSubmitt={this.OnTermSubmit}/>
            <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;