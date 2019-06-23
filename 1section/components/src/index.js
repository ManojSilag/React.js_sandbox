import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Manoj" timeAgo = "Today 12 PM" comment="Nice blog post!" image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sagar" timeAgo = "Today 3 AM" comment="Very Good" image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail author="Yash" timeAgo = "Today 2 PM" comment="Awfull, loved it" image={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render( <App/>, document.querySelector('#root'));