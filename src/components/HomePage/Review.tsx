import React from "react";
import { Row, Col, Card } from 'antd';
import { getRandomTestimony, testimonies } from "../../data/testimonies";

import './Review.scss';

export const Review = () => {
  const testimoniesCopy = [...testimonies];
  const reviews = [
    getRandomTestimony(testimoniesCopy),
    getRandomTestimony(testimoniesCopy),
    getRandomTestimony(testimoniesCopy),
  ];

  const bgColor = ["green", "purple", "blue"];  // Ensure these are defined in your CSS

  return (
    <div className="container review-session">
      <Row gutter={[16, 16]}>
        {reviews.map((review, index) => (
          <Col key={review.id} xs={24} md={8} className="review-col">
            <Card className={`review-card bg-beige m-2`}>
              <div className={`review-content px-4 mt-4 fs-20`}>
                {review.testimony ? review.testimony : "Testimony"}
              </div>
              <div className={`review-footer bg-${bgColor[index]} text-center text-white py-3 rounded-bottom`}>
                <div className="review-profession fs-22 fw-bold mb-2">
                  {review.profession ? review.profession : "Profession"}
                </div>
                <div className="review-name fs-22 mb-2">
                  {review.name ? review.name : "Name"}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
