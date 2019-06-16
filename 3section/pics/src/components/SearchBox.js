import React from 'react';



class SearchBox extends React.Component{
    constructor(props){
        super(props)
        this.state = { term: ''}
    }

    onSubmitChange = (event) =>{
        event.preventDefault();
        
        this.props.onSubmitt(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitChange}>
                    <div className="field">
                        <label style={{display: 'flex', justifyContent: 'center'}}>Image search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={ e => this.setState({ term: e.target.value}) }/>
                    </div>
                </form>
            </div>
        )
    }
}




export default SearchBox;