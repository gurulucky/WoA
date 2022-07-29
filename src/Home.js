/* eslint-disable */
import React from 'react';
import Container1 from './Components/Container1';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Container2 from './Components/Container2';
import Container3 from './Components/Container3';
import Container4 from './Components/Container4';
import Container5 from './Components/Container5';
import Container6 from './Components/Container6';
import Container7 from './Components/Container7';
import Container8 from './Components/Container8';
import Container9 from './Components/Container9';
import Ambassador from './Components/Extra';
import Utility from './Components/Extra2';
import PDP from './Components/Extra3';
import secondpimg from './images/Women of america-03.png'
import roadmap from './images/woa roadmap-28.png'

// import Footer from './Components/Footer';
import  KeyInfo  from './Components/KeyInfo';
// import ScrolltoTop from './Components/ScrolltoTop';

function Home() {
  return <div className='home' id='home'>
    {/* <ScrolltoTop/> */}

      <div className='brand' >
        <Navbar/>
     <Header/>
     </div>
     <div className='containerone' id="about">
     <Container1 />
     </div>
     <div className='images' id="img-sec">
        <img src={secondpimg} alt="not found" className='img-sec' srcset="" />
     </div>
     <div className='keyinfo' id="keyinfo">
     <KeyInfo/>
     </div>
     <div className='containereight' id="mining">
     <Container8/>
     </div>
     <div className='containerfour' id="roadmap">
      <br/><br/>
       <h1 className='road-flex-head'>ROADMAP</h1>
       <img src={roadmap} alt="not found" className='img-sec' srcset="" />
    </div>
     <div className='containertwo' id="collection">
     <Container2/>
     </div>
     <div className='utility' id="utility">
     <Utility/>
     </div>
 
     <div className='ambassador' id="ambassador">
     <Ambassador/>
     </div>
     {/* <div className='pdp' id="pdp">
     <PDP/>
     </div> */}
     {/* <div className='containerthree' id="rarity">
     <Container3/>
     </div> */}
     {/* <div className='containerfour' id="roadmap">
     <Container4/>
     </div> */}
     <div className='containerfive' id="team">
     <Container5/>
     </div>
     <div className='containersix' id="faq">
     <Container6/>
     </div>
     <div className='containerseven' id="contact">
     <Container7/>
     </div>
     <div className='containernine'>
     <Container9/>
     </div>
   
  </div>;
  
}
export default Home;
