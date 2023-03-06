import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GodmienImage from "../../img/godmien.jpg";
import Image from "next/image";
import s from "./carousel.module.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className={s.sliderImage}>
          <Image src={GodmienImage} alt="Godmien" />
        </div>
        <div className={s.sliderImage}>
          <Image src={GodmienImage} alt="Godmien" />
        </div>
        <div className={s.sliderImage}>
          <Image src={GodmienImage} alt="Godmien" />
        </div>
        <div className={s.sliderImage}>
          <Image src={GodmienImage} alt="Godmien" />
        </div>
        <div className={s.sliderImage}>
          <Image src={GodmienImage} alt="Godmien" />
        </div>
        <div className={s.sliderImage}>
          <Image src={GodmienImage} alt="Godmien" />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
