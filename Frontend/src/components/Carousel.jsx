import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen1 from "../assets/img/Banner_1.jpg";
import imagen2 from "../assets/img/Banner_2.jpg";
import imagen3 from "../assets/img/Banner_3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={imagen1} alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={imagen2} alt="Slide 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={imagen3} alt="Slide 3" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
