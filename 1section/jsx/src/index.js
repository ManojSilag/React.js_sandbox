// Import the react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return (
        <div>
            <label className="label" for="name">Enter Name</label>
            <input type="text" id="name"></input>
            <button style={{backgroundColor:'skyblue' ,color:'white'}}>Submit</button>
        </div>
    );
};

// Take react component and show it on the screen

ReactDOM.render( <App/>, document.querySelector('#root'));