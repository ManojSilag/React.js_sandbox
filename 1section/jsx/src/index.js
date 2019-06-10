// Import the react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom';

// function getButtonText(){
//     return 'click on me !!!!'
// }


// Create a react component
const App = () => {

    const buttonText = {text: 'click'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input type="text" id="name"></input>
            <button style={{backgroundColor:'skyblue' ,color:'white'}}>{buttonText.text}
                </button>
        </div>
    );
};

// Take react component and show it on the screen

ReactDOM.render( <App/>, document.querySelector('#root'));