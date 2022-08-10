import Leaflet from 'leaflet';

const LocationIcon = Leaflet.icon({
  iconUrl: `${process.env.NEXT_PUBLIC_URL}images/icon-location.svg`,

  iconSize: [66, 88],
  iconAnchor: [29, 90]
});

export default LocationIcon;
