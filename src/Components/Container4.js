/* eslint-disable */
import React from 'react';
import map1 from '../images/map1.png'
import map2 from '../images/map2.png'
import map3 from '../images/map3.png'
import map4 from '../images/map4.png'
import map5 from '../images/map5.png'
import map6 from '../images/map6.png'

function Container4() {
  return <div className='container4'>
      <div className="container">
          <div className="row">
              <div className="col- roadmap">
                  <h1 className='roadmap-h1'>Roadmap</h1>
                  <p>Making remarkable progress every step of the way, the following constitutes the roadmap (insert website name) has covered thus far!</p>
                  <div className="div">
                      <div><img width={"120px"} src={map1} alt="" /></div>
                   
                     <p>	[date] Launching of the smart contract to lay the path for the development of NFTs</p>
                  </div>
                  <div className="div">
                  <div ><img width={"125px"} src={map2} alt="" /></div>
                  <p>	[date] website development initiated with progress on the creation of the current collection of NFTs</p>
                  </div>
                  <div className="div">
                      <div><img width={"120px"} src={map3} alt="" /></div>
<p>	[date] launching of the website along with the implementation of wallet and section for gallery</p>
                  </div>
                  <div className="div">
                  <div ><img width={"125px"} src={map4} alt="" /></div>

                   <p>	[date] securing funds from (insert names of funders)</p>
                  </div>
                  <div className="div">
                      <div><img width={"120px"} src={map5} alt="" /></div>
                    <p>	[date] suggest more to add or change the current roadmap</p>
                  </div>
                 
              </div>
          </div>
      </div>
  </div>;
}

export default Container4;
