import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    constructor(props){
        super(props)
            this.state = { lat: null , errorMessage: '' };
    }

    //state = {lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition( 
            (Position) => {
                this.setState({lat: Position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    renderContent(){
        if( this.state.errorMessage &&  !this.state.lat ){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        else if( !this.state.errorMessage && this.state.lat ){
            return <SeasonsDisplay lat={this.state.lat}/>
        }
        else{
            return <Spinner message="Please accept loaction request"/>;
        }
    }

    render(){ 
        return <div> {this.renderContent()} </div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)