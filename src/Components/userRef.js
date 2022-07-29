/* eslint-disable */
import React, {useState} from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import Sidebar from './dashboardSidebar';

class References  extends React.Component{
    state = {
        users:{},
        data:[],
        counts:[]
    };

    componentDidMount = ()=>{
        var user = sessionStorage.getItem('User');
        if(!user || user == ''){
            window.location.href = '/login';
        }
        this.getUserData();
        this.getUserRef();
    }

    getUserData = ()=>{
        fetch(`http://localhost:5000/users`).then(res => res.json()).then(data => {
            this.setState({data});
        })
    }

    getUserRef = (id) => {
        fetch(`http://localhost:5000/users/references`).then(res => res.json()).then(counts => {
            this.setState({counts});
        })
    }

    displayUser = (users,counts)=>{
        if(!users) return null;
        if(!counts) return null;
        return users.map((user, index)=>{
            var count = counts.findIndex(i => i.id === user._id);
            return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{counts[count].count}</td>
            </tr>
            )
        });
    }

    render() {
        var allUsers = this.state.data.users;
        var counts = this.state.counts.data;
    return (
        <>
        <div className="row thankBg">
            <div className="col-3">
            <Sidebar/>

            </div>
            {/* <div className="col-md-9 offset-md-3 bs-h-100 row bs-center"> */}

                <div className="col-9 reference">

                    <div className="card bs-h-90 border-0">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h1>Users References</h1>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Total Referenced</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayUser(allUsers,counts)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    );
    }
}

export default References 
