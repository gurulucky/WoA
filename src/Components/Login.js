/* eslint-disable */
import React from 'react';
import axios from 'axios';
import "../App.css"
class Login extends React.Component{
    state = {
        email: '',
        pass:'',
    };

    EmailChange = event => {
        this.setState({ email: event.target.value });
        console.log(event.target.value);
    }

    PasswordChange = event => {
        this.setState({ pass: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var username = 'admin@admin.com';
        var password = 'admin';
        console.log(this.state.email, this.state.pass)

        if(username === this.state.email && password === this.state.pass){
            var Authuser = {username,password};
            sessionStorage.setItem('User', Authuser);
            window.location.href = '/admin';
        }
        
        // const user = {
        //     name: this.state.name,
        //     email : this.state.pass,
        //   };

        // axios.post(`http://localhost:5000/login`, { user })
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // })
      }
    render() {
        return (
            <>
            <div className="container-fluid thankbg-img loginScreen">

                <div className="row bs-center login-card">

                    <div className="col-md-4">
        
                        <div className="card loginCARD">
                        <form className="col-md-10 m-5 offset-md-1" onSubmit={this.handleSubmit.bind(this)}> 
                            <div className="mb-3">
                                <center><h1>Login</h1></center>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" onChange={this.EmailChange.bind(this)} className="form-control" placeholder="Email" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1"  class="form-label">Password</label>
                                <input type="password" onChange={this.PasswordChange.bind(this)} className="form-control" placeholder="Password" id="exampleInputPassword1" />
                            </div>        
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Login