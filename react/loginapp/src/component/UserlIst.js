import React, {Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5000/api/auth/users";

class UserList extends Component {
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('ltk')!==null && sessionStorage.getItem('rtk')!=='Admin'){
            this.props.history.push('/profile')
        }
        return(
            <UserDisplay userData={this.state.user}/>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default UserList;