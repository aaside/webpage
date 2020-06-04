import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'


const isClient = typeof window !== 'undefined';


const GoogleMap = (props) => {
  const {
    address,
    googleMapsApiKey
  } = props;
  const lat = address.lat;
  const lng = address.lng;

  return (
    <section className="google-map">
      <div className="map" style={{ height: '400px', width: '100%' }}>
        {isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={[lat, lng]}
            defaultZoom={15}
          >
            <Marker  
              lat={lat}
              lng={lng}
              name="My Marker" />
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
}

export default GoogleMap