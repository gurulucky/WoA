/* eslint-disable */
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../App.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
export default function Thankyou() {
    const params = useParams();
    const id = params.id;
    const local = window.location.origin;
    const url=`${local}/?ref_id=${id}`
    return (
        <>
        <div className="container-fluid thankyou">
            <div className="row bs-center">
                <div className="col-md-6 thanks">
                    <center>
                            <h1 className="text-white">Thank You!</h1>
                            <p className="lead text-white">Your Email has been verifed.</p>
                            <div className="bg-light rouded p-3">
                               <b>Reference-Url: </b> <span className="bs-url">{url} </span>
                            </div>
                            <CopyToClipboard text={url}>
                            <button className='copyLink'>Copy Link</button>
                            </CopyToClipboard>

                    </center>
                </div>
            </div>
        </div>
        </>
    );
}
