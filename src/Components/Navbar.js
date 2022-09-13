/* eslint-disable */
import React, { useState, useEffect } from 'react';
import '../App.css'
import cartoon from '../images/logo.png'
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
  const [color, setcolor] = useState(false);
  function scroll() {
    if (window.scrollY > 100) {
      setcolor(true)
    } else {
      setcolor(false);
    }
  }


  function change(e) {
    var links = document.querySelectorAll(".nav-link");
    if (window.scrollY > 1000) {
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
  }
  useEffect(() => {
    //  window.addEventListener()
    window.addEventListener('scroll', scroll);
    //      const script = document.createElement('script');

    // script.src = url;
    // script.async = true;

    // document.body.appendChild(script);
    return () => {
      window.removeEventListener('scroll', scroll);
      //         document.body.removeChild(script);
    }
  }, [])

  return (

    <div id='topheader'>
      <nav className={`navbar navbar-expand-lg navbar-dark ${color && "navscroll"}`}>
        <div className="container">
          <Link activeClass='active' spy={true} smooth={true} offset={-70} duration={10} className="navbar-brand" to="/">
            <img src={cartoon} className='logo' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar1" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={10} onClick={change} aria-current="page" to="about">ABOUT US </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={100} onClick={change} to="keyinfo">KEY INFORMATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={100} onClick={change} to="roadmap">ROADMAP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={10} onClick={change} to="collection">COLLECTION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={10} onClick={change} to="utility">UTILITY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={10} onClick={change} to="ambassador">AMBASSADORS</Link>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link" activeClass='active'spy={true} smooth={true} offset={-70} duration={10}  onClick={change} to="pdp">Pdp</Link>
        </li> */}
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={100} onClick={change} to="team">OUR TEAM</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={100} onClick={change} to="faq">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass='active' spy={true} smooth={true} offset={-70} duration={100} onClick={change} to="contact">JOIN US</Link>
              </li>
              {/*         
        <li className="nav-item">
          <Link className="nav-link" activeClass='active'spy={true} smooth={true} offset={-70} duration={10}  onClick={change} to="rarity">RARITY</Link>
        </li>
       
       
        <li className="nav-item">
          <Link className="nav-link" activeClass='active'spy={true} smooth={true} offset={-70} duration={100}  onClick={change} to="mining">MINTING</Link>
        </li> */}
              {/* <div>
        <a className='btn' href='https://connectwallet.com/'>Connect Wallet</a>

        </div> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
