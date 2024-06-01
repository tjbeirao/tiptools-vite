import { getLatLngFromAddress } from "./geocode";

const address = 'TipTools Home Daycare, Calgary, Alberta, Canada';

const fetchCoordinates = async () => {
  const coordinates = await getLatLngFromAddress(address);

  if (coordinates) {
    return coordinates;
  }
};

export const getCenter = async () => {
  const center: { lat: number; lng: number } = { lat: 0, lng: 0 };

  const coordinates = await fetchCoordinates();

  if (coordinates === undefined) {
    return undefined;
  }

  center.lat = coordinates.lat;
  center.lng = coordinates.lng;

  return center;
}