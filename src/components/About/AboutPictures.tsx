import React from "react";
import { Carousel } from 'react-bootstrap';
import './AboutPictures.scss'

export const AboutPictures = () => {
  return (
    <section className="container">
      <Carousel interval={3000} className="AboutPicturesCarousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/child_care_1.jpg"
            alt="Main Room"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/child_care_2.jpg"
            alt="Kitchen and Bathroom"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/child_care_3.jpg"
            alt="Nap room and sensorial"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
