import React from "react";
import { Space } from 'antd';
import "./AboutContainer.scss";
import { AboutTipTools } from "./AboutTipTools";
import { AboutEducator } from "./AboutEducator";
import { AboutPictures } from "./AboutPictures";

export const AboutContainer = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <AboutPictures />
      <AboutTipTools />
      <AboutEducator />
    </Space>
  );
};
