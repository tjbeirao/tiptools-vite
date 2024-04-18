import React, { ReactNode } from 'react';

const imageUrl = "https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

type HeroImageProps = {
  children?: ReactNode;
};

const HeroImage: React.FC<HeroImageProps> = ({ children }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      {children}
    </div>
  );
};

export { HeroImage };