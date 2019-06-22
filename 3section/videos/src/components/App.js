import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = { videos: [] , selectedVideo: null }
    }

    componentDidMount(){
        this.OnTermSubmit('car')
    }

    OnTermSubmit =async term=> {
        const response = await youtube.get('/search',{
            params:{ q: term },
        });
        //console.log(response);
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
        //console.log(response.data.items); 
    }

    onVideoSelect = (video)=>{
        //console.log( video, 'from the apppp');
        this.setState({ selectedVideo: video })
    }
    render(){
        return (
            <div className="ui container">
            <SearchBar onFormSubmitt={this.OnTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="six wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default App;