import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';


// const App = () => {
//     window.navigator.geolocation.getCurrentPosition( 
//         (Position) => console.log(Position),
//         (err) => {console.log(err)}
//     )
//     return (
//         <div>HI there!!!!
//         <SeasonsDisplay/>
//         </div>
        
//     )
// };

class App extends React.Component{
    constructor(props){
        super(props)
            this.state = { lat: null , errorMessage: '' };

            window.navigator.geolocation.getCurrentPosition( 
                (Position) => {
                    this.setState({lat: Position.coords.latitude});
                },
                (err) => {
                    this.setState({errorMessage: err.message});
                }
            );
    }



    render(){
    
        if( this.state.errorMessage &&  !this.state.lat ){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        else if( !this.state.errorMessage && this.state.lat ){
            return <div>latitude:{ this.state.lat}</div>;
        }
        else{
            return <div>Loading!!!</div>;
        }


    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)