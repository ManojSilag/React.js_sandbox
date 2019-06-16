import React from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import unsplash from '../api/unsplash';


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
            ImagesFound : {this.state.images.length} 
            </div>
        );
    }
}
export default App;