import React from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./item";
// import cloud3 from './images/cloud3.png';
import imgForSlider from './png/1.png'
import imgForSlider1 from './png/2.png'
import imgForSlider2 from './png/3.png'
import imgForSlider3 from './png/4.png'
import imgForSlider4 from './png/5.png'
import imgForSlider5 from './png/6.png'
import imgForSlider6 from './png/7.png'
import imgForSlider7 from './png/8.png'
// import url from './slider'

const breakPoints = [

  { width: 1, itemsToShow: 1,  },
  { width: 700, itemsToShow: 2,  pagination: false },
  { width: 850, itemsToShow: 3 , },
  { width: 1150, itemsToShow: 3,  }

]



function Carousell() {

  // useEffect(() => {
    // var slider = document.querySelectorAll('.slider');
    // const sliderclick = (e)=>{
    //   if(e.target.tagName == 'button'){
    //     var visible = document.querySelectorAll('rec-carousel-item-visible');
    //     console.log(visible);
    //     if(visible.length > 0){
    //     console.log(visible[0].children[0].children[0]);
    //     visible[0].children[0].children[0].style.width = '70%';
    //     visible[2].children[0].children[0].style.width = '70%';
    //     }
    //   }
    // } 
    // console.log(slider)
    // slider[0].onClick = sliderclick
    // const script = document.createElement('script');
  
    // script.src = url;
    // script.async = true;
  
    // document.body.appendChild(script);
    // var visible = document.querySelectorAll('.rec-carousel-item-visible');
    // console.log(visible.length);
    // if(visible.length == 3){
    //   console.log(visible[0].children[0].children[0]);
    //   visible[0].children[0].children[0].style.width = '70%';
    //   visible[2].children[0].children[0].style.width = '70%';
    // }
    // return () => {
    //   document.body.removeChild(script);
    // }
  // });

  return (
    <>
      <div>
        <Carousel breakPoints={breakPoints} className="slider">
         

          <img className="curosel "  src={imgForSlider} alt="" />
          <img className="curosel"    src={imgForSlider1} alt="" />
          <img className="curosel "   src={imgForSlider2} alt="" />
          <img className="curosel"   src={imgForSlider3} alt="" />
          <img className="curosel "   src={imgForSlider4} alt="" />
          <img className="curosel "   src={imgForSlider5} alt="" />
          <img className="curosel "   src={imgForSlider6} alt="" />
          <img className="curosel "   src={imgForSlider7} alt="" />
        </Carousel> 
      </div>
    </>
  );
}

export default Carousell