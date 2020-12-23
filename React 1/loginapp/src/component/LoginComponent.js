import React,{Component} from 'react';

const loginUrl = "http://localhost:5000/api/auth/login";
class LoginComponent extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

  
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword= (event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit = (event) => {
        var data = {
            "email":this.state.email,
            "password":this.state.password
        }

        fetch(loginUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem('_ltk',data.token)
            this.props.history.push('/profile')
        })
    }
    render(){
        return(
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        Login Page
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            />
                        </div>
                        <button type="button" className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Login
                        </button>

                    </div>

                </div>
            </div>
        )}
}


export default LoginComponent