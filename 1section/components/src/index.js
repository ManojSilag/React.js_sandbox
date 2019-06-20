import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avtar"/>
                </a>
                <div className="content">
                <a href="/" className="author">
                    SAM
                </a>
                </div>
                <div className="metadata">
                    <span className="data">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    )
}

ReactDOM.render( <App/>, document.querySelector('#root'));