import React, {Component} from 'react';

const registerUrl = "http://localhost:5000/api/auth/register"

class RegisterComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword= (event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit = (event) => {
        var data = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }

        fetch(registerUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/login'))
    }
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register Page
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            />
                        </div>
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
                            Register
                        </button>

                    </div>

                </div>
            </div>
        )
    }
}

export default RegisterComponent