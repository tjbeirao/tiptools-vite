import React from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button } from 'antd';
import './MainBanner.scss';

export const MainBanner = () => {
  return (
    <div id="mainBanner">
      <Row justify="center" align="middle" className="container">
        <Col lg={0} xl={12} style={{ display: 'none', textAlign: 'center' }} className="img-column">
          {/* Responsive handling in Ant Design using 'xl' and 'lg' props */}
          <img className="img" src="oFF_a_logo_for_an_daycare_brand_simple_pixel_art_7a5a9cc9-22c2-4a63-962b-fa989bb5a89d-removebg-preview.png" alt="banner" style={{ maxWidth: '100%', height: 'auto' }} />
        </Col>
        <Col xs={24} md={16} className="banner-text">
          <h1 className="mb-3">
            TipTools
          </h1>
          <p className="mt-5 mb-3 fs-24">
            Welcome to our family home daycare, a reliable and professional place where your child will learn and have fun.
            We understand the importance of finding a safe and nurturing environment for your child, and that's why we offer top-quality care from an experienced and loving educator.
            Our childcare is designed to provide a stimulating and educational atmosphere for your child's development and growth. So, if you're looking for a place that you can trust, look no further than Tiptools!</p>
          <div style={{ marginLeft: "-4px" }} className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end mt-5">
            <Button type="primary" size="large">
              <NavLink to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                Learn More
              </NavLink>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
