import React from "react";
import { Row, Col, Table, Typography } from 'antd';
import "./AboutEducator.scss";
import { educators } from "../../data/educators";

const { Title, Paragraph } = Typography;

export const AboutEducator = () => {
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
  ];

  return (
    <section className="about-educators">
      <div className="container">
        <Title level={2} className="mb-3">Educator</Title>
        {educators.map((educator) => {
          return (
            <Row key={educator.id} align="middle" className="mb-3">
              <Col span={24} className="my-3">
                <Paragraph className="fs-24">{educator.description}</Paragraph>
              </Col>

              <Col span={24} className="educator_workshops my-3">
                <Title level={3} className="my-3">Qualifications and Training</Title>
                <Table columns={columns} dataSource={educator.workshops.map((workshop, index) => ({
                  ...workshop,
                  key: index,
                }))} pagination={false} striped hoverable />
              </Col>
            </Row>
          );
        })}
      </div>
    </section>
  );
};
