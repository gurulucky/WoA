/* eslint-disable */
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import ScrollToTop from "react-scroll-to-top";

function Footer() {

   
  return <div className='container10'>
      <div className="container">
          <div className="row ">
              <div className="col- end">
          <ScrollToTop smooth style={{backgroundColor:"grey"}}/>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f marl"></i>
          <i className="fa-brands fa-whatsapp marlr"></i>
          Copyright © 2021 - Kinsmen Capital Pty Ltd (ACN 613 548 575) <a href='/privacy'> Privacy Policy</a> <a href='/terms'> Terms & Conditions</a>
              </div>
          </div>
      </div>
  </div>;
}

export default Footer;
