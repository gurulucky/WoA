import React from 'react';
import '../App.css'
import cartoon from '../images/Women of america-04.png'

function Container3() {
  return <div className='container3'> 
      <div className="container rarity">
          <div className="row">
              <div className="col- rarityh1">
                  <h1>Rarity</h1>
              </div>
          </div>
          <div className="row">
            <div className="col-md-7 rarity-content">

           <p>The beauty of WoA NFTs is that they are not only unique and innovative in their approach, but they are also the representation of a growing degree of acceptance, appreciation, and empowerment of African women. It is an opportunity for people who share an admiration for the African culture. We are thoroughly committed to integrating Women of Africa and by extension, the divine African culture, in the world of Web3 and beyond.</p><br />
           <p>These unique collectible masterpieces are stored on the BSC blockchain with proof of ownership. With a total number of 10,000, these elegant drawings of African women are a representation of something authentic. Each NFT is highly collectible and priceless on its own terms considering aspects like quality, background, artistic elaboration, and the nature of the drawing itself. These are not mere digital tokens, but identities to be respected and cherished. You would find that divided on the basis of categories, some NFTs are simply amazing, some breathtakingly rare, and some have other worldly potential guided by the spirits of the ancient African ancestors.</p>


            </div>
              <div className="col-md-5 d-flex">
                  <img className='container3-img' src={cartoon} alt="" />
              </div> 
        
          </div>
      </div>
  </div>;
}

export default Container3;
