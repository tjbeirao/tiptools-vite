import React from "react";
import { Row, Col, Card } from 'antd';
import "./Mission.scss";
import { missionValues, valuesValues, visionValues } from "../../data/mission";

import parse from "html-react-parser";

export const Mission = () => {
  const mission = missionValues;
  const vision = visionValues;
  const values = valuesValues;

  return (
    <div id="mainValues" className="container">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12}>
          <Card bordered={false} className="mb-5">
            <h2 className="card-title title-1">{mission.title}</h2>
            <p className="card-text">{mission.text}</p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card bordered={false} className="mb-5">
            <h2 className="card-title title-2">{vision.title}</h2>
            <p className="card-text">{vision.text}</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card bordered={false} className="mb-5">
            <h2 className="card-title title-3">{values.title}</h2>
            <div className="card-text values-body">{parse(values.text)}</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
