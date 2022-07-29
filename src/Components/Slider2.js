
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="card-slider">
  <div className="card">

    <div className="rating">
      <span className="sr-only">Rating: 3 out of 5 stars</span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="far fa-star" aria-hidden="true"></span>
      <span className="far fa-star" aria-hidden="true"></span>

      <a href="https://accessible360.com/#reviews" className="reviews-link">77 reviews</a>
    </div>
  </div>

  <div className="card">
    
    <div className="rating">
      <span className="sr-only">Rating: 4 out of 5 stars</span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="far fa-star" aria-hidden="true"></span>

      <a href="https://accessible360.com/#reviews" className="reviews-link">30 reviews</a>
    </div>
  </div>

  <div className="card">
   
    <div className="rating">
      <span className="sr-only">Rating: 2 out of 5 stars</span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="far fa-star" aria-hidden="true"></span>
      <span className="far fa-star" aria-hidden="true"></span>
      <span className="far fa-star" aria-hidden="true"></span>

      <a href="https://accessible360.com/#reviews" className="reviews-link">0 reviews</a>
    </div>
  </div>

  <div className="card">
   
    <div className="rating">
      <span className="sr-only">Rating: 5 out of 5 stars</span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>

      <a href="https://accessible360.com/#reviews" className="reviews-link">7 reviews</a>
    </div>
  </div>

  <div className="card">
    <a href="https://accessible360.com" target="_blank" className="main-link">
      <h2 className="title">Fifth Product title</h2>

      <div className="image">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3609497/galina-n-300x300.jpg" alt="Small succulent with long, spikey leaves in a mug-like planter."/>
      </div>
    </a>

    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <div className="price">
      <span className="new-price">$0.99</span>
    </div>

    <div className="rating">
      <span className="sr-only">Rating: 5 out of 5 stars</span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>
      <span className="fas fa-star" aria-hidden="true"></span>

      <a href="https://accessible360.com/#reviews" className="reviews-link">9 reviews</a>
    </div>
  </div>
</div>

<p className="note">Built with <a href="https://github.com/Accessible360/accessible-slick" target="_blank">accessible-slick</a>, a fully WCAG 2.0 / 2.1 compliant, drop-in replacement for Slick Slider!</p>
        </Slider>
      </div>
    );
  }
}
