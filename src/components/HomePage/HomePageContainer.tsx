import React from 'react';
import { Space } from 'antd';
import './HomePageContainer.scss';
import { MainBanner } from './MainBanner';
import { Mission } from './Mission';
import { ContactContainer } from '../Contact/ContactContainer';

export const HomePageContainer = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <MainBanner />
      <Mission />
      {/* Uncomment and add the Review component if needed
      <Review />
      */}
      <ContactContainer />
    </Space>
  );
};
