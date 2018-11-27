import React, { Component } from "react";
import Slider from "react-slick";
import orange from '../css/assets/orange.jpg';
import watermelon from '../css/assets/watermelon.jpg';
import raspberry from '../css/assets/raspberry.jpg';
import pineapple from '../css/assets/pineapple.jpg';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      fade: true,
      pauseOnHover: false,
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={orange} className="fruit" alt="picture of an orange" />
          </div>
          <div>
              <img src={pineapple} className="fruit" alt="picture of an pineapple" />
          </div>
          <div>
              <img src={raspberry} className="fruit" alt="picture of a raspberry" />
          </div>
          <div>
              <img src={watermelon} className="fruit" alt="picture of a watermelon" />
          </div>
        </Slider>
      </div>
    );
  }
}
