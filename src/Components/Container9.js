/* eslint-disable */
import React from 'react';
import '../App.css'
import cartoon from '../images/Women of america-06.png'
import cartoon1 from '../images/fb.png'
import cartoon2 from '../images/twit.png'
import cartoon3 from '../images/inst.jfif'
import cartoon4 from '../images/link.png'
import cartoon5 from '../images/pin.svg'
function Container9() {
  return <div className='container9'>
    <div className="container">
      <div className="row pb-5">
        <div className="col-md-6 footer2 ">
          <img className='img-fluid container9-img mt-5' src={cartoon} alt="" />
          <p>Women of Africa is a project developed by Kinsmen Capital Pty Ltd on the Binance Smart Chain (BSC) to honor and provide representation to African women online.</p>
        </div>
        <div className='col-md-6 mt-5'>
          <div className='list-navs-foot'>
              <h1 className='foot-heading'>SECTIONS</h1>
              <div className='d-flex justify-content-center mt-5'>
                <div className='first-navs-list'>
                    <h3><a href="">About</a></h3>
                    <h3><a href="">Ambassadors</a></h3>
                    <h3><a href="">Utility</a></h3>
                    <h3><a href="">Collection</a></h3>
                    <h3><a href="">Rarity</a></h3>
                </div>  
                <div className='second-navs-list'>
                  <h3><a href="">Key Information</a></h3>
                  <h3><a href="">Roadmap</a></h3>
                  <h3><a href="">Our Team</a></h3>
                  <h3><a href="">FAQs</a></h3>
                  <h3><a href="">Minting</a></h3>
                </div>
              </div>
          </div>
        </div>
        {/* <div className="col-6 footer2 ">
          <h3>Sections</h3>
          <div className='uls'>
          <div>
            <ul>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} aria-current="page" href="#about">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#collection">COLLECTION</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#rarity">RARITY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#roadmap">ROADMAP</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#team">TEAM MEMBERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#faq">FAQS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#keyinfo">KEY INFORMATION</a>
              </li>

            </ul>
          </div> 
          </div>
          </div> */}
        {/* <div className="col-4 footer2  " >
          <h3>Social Links</h3>
          <div className='link'>
            <a href="https://www.facebook.com/">
          <img className='img-fluid links fb' src={cartoon1} alt="" />
            </a>
            <a href="https://twitter.com/?lang=en">

          <img className='img-fluid links' src={cartoon2} alt="" />
            </a>
            <a href="https://www.instagram.com/">
          <img className='img-fluid links' src={cartoon3} alt="" /> <br />

            </a>
<a href="https://www.linkedin.com/login">

          <img className='img-fluid links' src={cartoon4} alt="" />
</a>
  <a href="https://www.pinterest.com/">
          <img className='img-fluid links' src={cartoon5} alt="" />

  </a>
        </div>
        </div> */}
      </div>
    </div>
  </div>;
}

export default Container9;
