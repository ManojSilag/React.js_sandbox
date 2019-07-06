import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={term : ''}
    }


    OnInputChange= (event) =>{
        //console.log(event.target.value)
        this.setState({term : event.target.value});
    }

    OnFormSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state.term);
        this.props.onFormSubmitt(this.state.term)
    }

    render(){
        //console.log(this.state)
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.OnFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                        onChange={this.OnInputChange}
                        value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

//AIzaSyCAHMArOYofZZRDY3_ze2aaCBSvsr9VYUA