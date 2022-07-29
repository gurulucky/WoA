import React from 'react';
// import { useParams } from 'react-router-dom';

export default function DashboardSidebar() {
    // const params = useParams();
    return (
        <>
        {/* <div className="d-flex flex-column col-md-3 bs-h-100 p-3 bg-light p-fixed"> */}
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Rikishi</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="/admin" className="nav-link active" aria-current="page">
                    All Users
                </a>
            </li>
            <li>
                <a href="/admin/addUser" className="nav-link link-dark">
                    Add User
                </a>
            </li>
            <li>
                <a href="/admin/users/references" className="nav-link link-dark">
                    User References
                </a>
            </li>
            <li>
                <a href="/" className="nav-link link-dark">
                    Visit Site
                </a>
            </li>
           
            </ul>
            <hr />
            <div className="dropdown">
            <a href="/" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" href="/">New project...</a></li>
                <li><a className="dropdown-item" href="/">Settings</a></li>
                <li><a className="dropdown-item" href="/">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
            </div>
        {/* </div> */}
        </>
    );
}
