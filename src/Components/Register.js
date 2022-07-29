import React from 'react';
// import { useParams } from 'react-router-dom';

export default function Thankyou() {
    // const params = useParams();
    return (
        <>
        <div className="container-fluid thankBg">

            <div className="row bs-center">

                <div className="col-md-4">
    
                    <div className="card">
                    <form className="col-md-10 m-5 offset-md-1"> 
                        <div className="mb-3">
                            <center><h1>Register</h1></center>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Email" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1"  class="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" />
                        </div>        
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
