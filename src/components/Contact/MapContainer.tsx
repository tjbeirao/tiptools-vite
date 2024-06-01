import React, { useEffect } from 'react'
import { getCenter } from '../../helpers/getCenter';
import { Map } from './Map'
import './MapContainer.scss'

export const MapContainer = () => {
  const [center, setCenter] = React.useState<{ lat: number; lng: number }>();

  useEffect(() => {
    const fetchCoordinates = async () => {
      let center = await getCenter();
      if (center) {
        setCenter(center);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <div className="d-none d-md-block">
      {center && <Map center={center} />}
    </div>
  )
}

export default MapContainer