import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Manoj" timeAgo = "Today 12 PM" comment="Nice blog post!" image={faker.image.avatar()}/>
            <CommentDetail author="Sagar" timeAgo = "Today 3 AM" comment="Very Good" image={faker.image.avatar()}/>
            <CommentDetail author="Yash" timeAgo = "Today 2 PM" comment="Awfull, loved it" image={faker.image.avatar()}/>
        </div>
    )
}

ReactDOM.render( <App/>, document.querySelector('#root'));