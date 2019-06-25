import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';


const App = () => {

    window.navigator.geolocation.getCurrentPosition( 
        (Position) => console.log(Position),
        (err) => {console.log(err)}
    )


    return (
        <div>HI there!!!!
        <SeasonsDisplay/>
        </div>
        
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)