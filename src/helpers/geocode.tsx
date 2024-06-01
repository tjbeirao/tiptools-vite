import axios from 'axios';

const apiKey = 'AIzaSyB8qkS6dbuer4F_4lES2nUf-KdGs7tVN4s';

export const getLatLngFromAddress = async (address: string): Promise<{ lat: number; lng: number } | null> => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`
    );

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return null;
  }
};
