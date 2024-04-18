import React from 'react';
import { HeroImage } from '../components';

const HomePage: React.FC = () => {
  return (
    <HeroImage>
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mt-0 mb-6">Welcome to Stitch Day Care</h1>
        <p className="text-xl">
          Your trusted partner in early child development.
        </p>
      </div>
    </HeroImage>
  );
};

export { HomePage };
