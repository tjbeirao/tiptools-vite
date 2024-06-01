import React from "react";
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph, Link } = Typography;

export const ContactUsBanner = () => {
  return (
    <Row gutter={16} className="contactInfo">
      <Col xs={24} md={12}>
        <div>
          <Title level={3}>Inquiries</Title>
          <Paragraph>
            Still have questions about how we work? Maybe you'd like to give us some feedback. We’d love to hear from you!
          </Paragraph>
          <Link href="mailto:info@tiptools.ca" className="link">
            info@tiptools.ca
          </Link>
        </div>

        <div className="mt-5">
          <Title level={3}>Address</Title>
          <Link href="https://goo.gl/maps/xfXUcRKFQDdzKYC36" target="_blank" rel="noreferrer">
            <Paragraph>7394 202 Ave SE, Calgary, AB T3M 0M2</Paragraph>
          </Link>
        </div>
      </Col>
      
      <Col xs={24} md={12}>
        <img
          src="children (Custom).png"
          alt="children"
          className="contact-image"
          style={{ width: '100%', height: 'auto' }} // Ensure responsiveness and correct scaling
        />
      </Col>
    </Row>
  );
};
