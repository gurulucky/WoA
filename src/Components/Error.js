import React from 'react';
import sumro2 from '../images/sumro2.png';

export default function Error() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                {/* <img src={cloud} alt="" width="400" /> */}
                <h1>404 Error page</h1>
                <p className="lead text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur, quam quos beatae veniam est quidem qui blanditiis iure illum fugiat, atque minima ex? Accusamus similique tempora expedita quas dolorem, voluptatum ipsa harum enim natus repudiandae eligendi in cupiditate omnis nostrum voluptatem? Culpa facilis perferendis architecto provident dicta eos possimus.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
            </div>
            <div className="col-lg-6">
                <img src={sumro2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            </div>
        </div>
    )
}
