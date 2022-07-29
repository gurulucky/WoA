/* eslint-disable */
import React from 'react';
import '../App.css'
import cartoon from '../images/Women of america-01.png'
import { SocialIcon } from 'react-social-icons';

function Header() {
  return <div className='header container'>
    <div className="row">
        <div className="col-md-6">
          <h3>Launching Soon</h3>
            <h1>Women Of Africa</h1>
            <p>We’re building a vibrant community dedicated to the empowerment of African women. Honoring and celebrating the brave and beautiful Women of Africa. </p>
           <button><a href="#contact"> Register Now</a></button><br></br>
           <button className='joinDiscord'><a href="#"> Join Discord</a></button>
        </div>
        <div className="col-md-6 mt-4">
        <div className='socialIcons'>
            <SocialIcon style={{marginRight:"10px"}} network="twitter" url='#' bgColor='#000000' fgColor='#ffffff'/>
            <SocialIcon style={{marginRight:"10px"}} network="discord" url='#' bgColor='#000000' fgColor='#ffffff'/>
            <SocialIcon network="instagram" url='#' bgColor='#000000' fgColor='#ffffff'/>
          </div>
            <img className='header-image' src={cartoon} alt="header" />
        </div>
    </div>
  </div>;
}

export default Header;
