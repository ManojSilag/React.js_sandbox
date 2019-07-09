import React from 'react';
import {connect} from 'react-redux';
import {fetcchUser} from '../actions';

class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetcchUser(this.props.userId)
    }


    render(){
        console.log(this.props.userId);
        return <div>User Header: {this.props.userId}</div>
    }

}

export default connect(null, {fetcchUser})(UserHeader);