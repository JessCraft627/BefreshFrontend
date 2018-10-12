
import React, { Component } from "react";
import Slider from "react-slick";
import orange from '../css/assets/orange.jpeg'
import kiwi from '../css/assets/kiwi.jpeg'
import pink from '../css/assets/pinkfruit.jpeg'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={orange} className="fruit" alt="logo" />
          </div>
          <div>
              <img src={kiwi} className="fruit" alt="logo" />
          </div>
          <div>
              <img src={pink} className="fruit" alt="logo" />
          </div>
        </Slider>
      </div>
    );
  }
}
