import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    return (
      <div className="mt-5">
        <Slider {...settings}>
          <div className="bg-azt rounded-lg border-2 border-azp ">
           <img src="src/images/lg.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azf rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azt rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azf rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azt rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azf rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azt rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azf rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
          <div className="bg-azt rounded-lg border-2 border-azp">
           <img src="src/images/samsung.png" className="h-20 w-40 mx-auto"/>
          </div>
        </Slider>
      </div>
    );
  }
}