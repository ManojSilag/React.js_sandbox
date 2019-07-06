import React from 'react';
//import axios from 'axios';
import SearchBox from './SearchBox';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = { images: [] }
    }


      onSearchSubmit = async (term) => {
        console.log(term);
        const response = await unsplash.get('/search/photos',{
            params : { query: term },
        });
        //console.log(response.data.results);
        this.setState({images : response.data.results})
    }


    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBox onSubmitt={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/> 
            </div>
        );
    }
}
export default App;