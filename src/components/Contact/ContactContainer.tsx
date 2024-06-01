import React from "react";
import { Typography, Row, Col } from 'antd';
import { ContactUsBanner } from "./ContactUsBanner";

import "./ContactContainer.scss";

const { Title } = Typography;

export const ContactContainer = () => {
  return (
    <div className="contactContainer">
      <Row justify="center" className="contactHeader mb-5">
        <Col span={24}>
          <Title level={2} className="text-center">Contact Us</Title>
        </Col>
      </Row>

      <Row justify="center" className="mb-5">
        <Col>
          <ContactUsBanner />
        </Col>
      </Row>
    </div>
  );
};
