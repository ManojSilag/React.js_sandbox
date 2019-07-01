import React from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';


class App extends React.Component {
    
    onSearchSubmit(term){
        console.log(term);
        
    }


    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBox onSubmitt={this.onSearchSubmit}/>
            </div>
        );
    }
}
export default App;