import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import LocationIcon from 'components/LocationIcon';

const Map = () => {
  return (
    <MapContainer
      center={[40.7122812, -74.0895733]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${process.env.NEXT_PUBLIC_MAPBOX_USERNAME}/${process.env.NEXT_PUBLIC_MAPBOX_STYLE_KEY}/tiles/256/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
      />
      <Marker
        position={[40.700489, -74.0734817]}
        draggable={false}
        icon={LocationIcon}
      />
    </MapContainer>
  );
};

export default Map;
