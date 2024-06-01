import React from "react";
import { Carousel } from 'antd';
import './AboutPictures.scss';

export const AboutPictures = () => {
  return (
    <section className="container">
      <Carousel autoplay effect="fade" dotPosition="bottom" className="AboutPicturesCarousel">
        <div>
          <img
            className="d-block w-100"
            src="/child_care_1.jpg"
            alt="Main Room"
            style={{ width: '100%', verticalAlign: 'middle' }} // Ensure the image fits and is centered
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="/child_care_2.jpg"
            alt="Kitchen and Bathroom"
            style={{ width: '100%', verticalAlign: 'middle' }}
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="/child_care_3.jpg"
            alt="Nap room and sensorial"
            style={{ width: '100%', verticalAlign: 'middle' }}
          />
        </div>
      </Carousel>
    </section>
  );
};
