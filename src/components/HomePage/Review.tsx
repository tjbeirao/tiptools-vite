import React from "react";
import "./Review.scss";
import { getRandomTestimony, testimonies } from "../../data/testimonies";

export const Review = () => {
  const testimoniesCopy = [...testimonies];
  const reviews = [
    getRandomTestimony(testimoniesCopy),
    getRandomTestimony(testimoniesCopy),
    getRandomTestimony(testimoniesCopy),
  ];

  const bgColor = ["green", "purple", "blue"];

  return (
    <div className="container">
      <section className="review-session">
        <div className="row">
          {reviews.map((review, index) => (
            <div key={review.id} className="col col-sm-12 col-md-4 d-flex flex-column flex-lg-row flex-lg-nowrap align-items-center align-items-lg-stretch position-relative">
              <div className="border d-flex flex-column justify-content-between card m-2 bg-beige p-0 block-module--reviews-card-alt--47cf4">
                <div className="d-flex flex-column position-relative align-items-center my-4">
                  <p className="fs-20 px-4 mt-4">
                    {review.testimony ? review.testimony : "Testimony"}
                  </p>
                </div>
                <div className={`d-flex flex-column align-items-center position-relative rounded-bottom bg-${bgColor[index]}`}>
                  <div className="d-flex flex-column align-items-center py-3">
                    <div className="fs-22 fw-bold mb-2 headings-family text-white">
                      {review.profession ? review.profession : "Profession"}
                    </div>
                    <div className="fs-22 mb-2 text-uppercase text-white">
                      {review.name ? review.name : "Name"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
