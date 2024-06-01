import React from 'react';
import { Row, Col, Typography } from 'antd';
import './AboutTipTools.scss';

const { Title, Paragraph } = Typography;

export const AboutTipTools = () => {
  return (
    <section className="about-tip-tools">
      <div className='container'>
        <Row align="middle">
          <Col span={24}>
            <Title level={1} className='mb-3'>About TipTools</Title>
            <Paragraph className='mb-3 fs-24'>
              Tip Tools is a licensed childcare established in Calgary, AB in 2023 that provides a safe, nurturing, and supportive environment to children in the Rangeview community and its neighbours.
            </Paragraph>
            <Paragraph className='mb-3 fs-24'>
              We strive to build strong relationships with the children and their families, listening to their concerns, providing regular updates on their child's progress, and creating a warm and welcoming atmosphere where children feel valued and cared for.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </section>
  );
};
