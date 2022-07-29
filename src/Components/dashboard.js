/* eslint-disable */
import React, {useState} from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import Sidebar from './dashboardSidebar';

class Dashboard extends React.Component{

    state = {
        users:{},
        data:[]
    };

    componentDidMount = ()=>{
        var user = sessionStorage.getItem('User');
        if(!user || user == ''){
            window.location.href = '/login';
        }
        this.getUserData();
    }

    getUserData = ()=>{
        fetch(`http://localhost:5000/users`).then(res => res.json()).then(data => {
            this.setState({data});
        })
    }

    deleteUser = (index,id) => {
        axios.get(`http://localhost:5000/users/delete/${id}`)
        .then(res => {
          console.log('Deleted');
        })
        this.state.data.users.splice(index,1);
        this.getUserData();
    }

    displayUser = (users)=>{
        if(!users) return null;

        return users.map((user, index)=>{
            return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{user.referenceId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <a className="btn btn-success" href={'/admin/editUser?id='+user._id}>Edit</a> | <a className="btn btn-success" onClick={() => this.deleteUser(index,user._id)} className="btn btn-danger">Delete</a>
                </td>
            </tr>
            )
        });
    }

    render() {
        var allUsers = this.state.data.users;
    return (
        <>
        <div className="row thankBg">
            <div className="col-3">

            <Sidebar/>
            </div>
            {/* <div className="col-md-9 offset-md-3 bs-h-100 row bs-center"> */}

                <div className="col-9 adminData">

                    <div className="card bs-h-90 border-0">
                        {/* <form className="col-md-12 p-5 border-0">  */}
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h1>Users</h1>
                                <a href="admin/addUser" className="btn btn-primary">Add New</a>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Refered By</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displayUser(allUsers)}
                                </tbody>
                            </table>

                        {/* </form> */}
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    );
    }
}

export default Dashboard
