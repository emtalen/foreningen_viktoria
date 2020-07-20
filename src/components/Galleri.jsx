import React from "react";
import Navigation from "./Navigation";
import { Slide } from "react-slideshow-image";

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

const Galleri = () => {
  const contactInfo = [
    // here goes some images
  ];
  return (
    <div className="main-container">
      <div className="main-content">
        <Navigation />
        <div>
          <Slide {...properties}>
            {contactInfo.map (info => {
              return (
                <div className='each-slide' key={info.id}>
                  <div>
                    <img src={info.img} alt={info.id}/>
                  </div>
                </div>
              )
            })}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Galleri;
