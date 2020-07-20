import React from "react";
import { Slide } from "react-slideshow-image";
import "../styles/galleri.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const SlideShow = () => {
  const slideImages = [
    {
      id: "1",
      img: "/images/Victoria 1_small.jpeg",
    },
    {
      id: "2",
      img: "/images/Victoria 2_small.jpeg",
    },
    {
      id: "3",
      img: "/images/Victoria 3_small.jpeg",
    },
    {
      id: "4",
      img: "/images/Victoria 4_small.jpeg",
    },
    {
      id: "5",
      img: "/images/Victoria 5_small.jpeg",
    },
  ];
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slide) => {
          return (
            <div className="each-slide" key={slide.id}>
              <div>
                <span> <p>this is a slide</p>  {slide.img}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideShow;
