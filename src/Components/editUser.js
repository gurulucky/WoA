/* eslint-disable */
import React from 'react';
import axios from 'axios';
import Sidebar from './dashboardSidebar';
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');



class Dashboard extends React.Component{
    state = {
        name: '',
        email:'',
    };

    componentDidMount = () =>{
        var user = sessionStorage.getItem('User');
        if(!user || user == ''){
            window.location.href = '/login';
        }
        if(!id){
            window.location.href = '/admin'
        }
        this.getUser();
    }

    NameChange = event => {
        this.setState({ name: event.target.value });
    }

    EmailChange = event => {
        this.setState({ email: event.target.value });
    }

    
    handleSubmit(e) {
        e.preventDefault();
        // if(!ref_id || ref_id=='') ref_id='';
        const user = {
            name: this.state.name,
            email : this.state.email,
          };

        axios.put(`http://localhost:5000/users/${id}`, { user })
        .then(res => {
            window.location.href = '/admin'
        })
      }

      getUser() {
        fetch(`http://localhost:5000/users/${id}`).then(res => res.json()).then(data => {
            this.setState({name:data.users.name,email:data.users.email});
            console.log(data);
        })
      }

    render() {

    return (
        <>
        <div className="row thankBg2">
            <div className="col-3">
            <Sidebar/>
            </div>
            {/* <div className="col-md-9 offset-md-3 bs-h-100 row bs-center"> */}

                <div className="col-9">

                    <div className="card bs-h-90 editCard">
                        <form className="col-md-12 p-5" onSubmit={this.handleSubmit.bind(this)}> 
                            <div className="d-flex mb-3">
                                <h1>Users</h1>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.NameChange.bind(this)} placeholder="Email" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.EmailChange.bind(this)} placeholder="Email" id="exampleInputEmail1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    );
    }
}

export default Dashboard
