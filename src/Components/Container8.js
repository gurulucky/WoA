/* eslint-disable */
import React, { useState } from 'react';
import cartoon from '../images/cont8.png'
import colag from '../images/Women of america-05.png'


function Container8() {
 
  return <div className='container8'> 
  <div className="container">
      <div className="row">
      <h1>Minting</h1>

          <div className='col-6'>
          <div className="col- minting">
              <img className='container8-img' src={cartoon} alt="" />
            <div className='nft'>
            <div className='w-100 d-flex justify-content-between'>
              <p>Your NFT has been Minted</p> <p>TXID : -</p>
            </div>
            <div className='w-100 d-flex justify-content-between'>
            <p> Name : Lorem</p><p> Royalty : 15% </p>
            </div>
            <div className='w-100 d-flex justify-content-between'>
            <p>  Contract : 7+123</p>  <p> Token Id : (7)</p>
            </div>
          <button>List NFT</button>
            </div>

          </div>
          </div>
          <div className='col-6'>
            <img src={colag} className='img-wth' alt="" srcset="" />
          </div>
      </div>
  </div>
  </div>;
}

export default Container8;
