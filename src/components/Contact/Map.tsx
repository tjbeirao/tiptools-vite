import React from 'react';
import { GoogleMap } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '700px',
};

interface MapProps {
  center: { lat: number; lng: number };
}

export const Map = (props: MapProps) => {
  const { center } = props

  return (
    <div>map</div>
      // <GoogleMap
      //   mapContainerStyle={containerStyle}
      //   center={center}
      //   zoom={16}
        
      // />
  );
};
