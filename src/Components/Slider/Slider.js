import React, { useState } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import "./Slider.scss";
import { data } from "./SliderData";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 19 : (previous) => previous - 1);
  };
  const NextSlide = () => {
    setCurrentSlide(currentSlide === 19 ? 0 : (previous) => previous + 1);
  };

  // console.log(data);
  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide*100}vw)`}} >
        {data.map((image) => {
          const { regular } = image["urls"];
          return <img className="" key={image.id} src={regular} alt="" />;
        })}
      </div>
      <div className="icons">
        <div className="icon" onClick={previousSlide}>
          <FaArrowCircleLeft></FaArrowCircleLeft>
        </div>
        <div className="icon" onClick={NextSlide}>
          <FaArrowCircleRight></FaArrowCircleRight>
        </div>
      </div>
    </div>
  );
};

export default Slider;
