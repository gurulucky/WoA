import React from 'react';
import '../App.css'
import Slider from './Carousel'
// import Slider  from './Slider2';
function Container2() {
  return <div className='container2'>
   <div className='container containere'>
<div className="row">
    <div className="col-">
      <h1>Collection</h1>
      <p>Women of Africa is a collection of 10,000 unique NFTs, randomly crafted from 278 painstaking and meticulous hand-drawn attributes and 22 traits, living on the BSC blockchain.</p>
      <br /> 
      <p>The WoA NFTs are representations of Women of African from various regions of the continent  including significant figures that highlight their respective cultural aspects. </p>
      <br />
      <p> The beauty of WoA NFTs is that they are not only unique and innovative in their approach, but they are also the representation of a growing degree of acceptance, appreciation, and empowerment of African women. It is an opportunity for people who share an admiration for the African culture. We are thoroughly committed to integrating Women of Africa and by extension, the divine African culture, in the world of Web3 and beyond. </p>

    </div>
</div>
<div className="row">
    <div className="col- mt-4">
        <Slider/>
    </div>
</div>
  </div>
  </div>
  ;

}

export default Container2;
