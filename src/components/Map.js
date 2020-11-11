import React from "react";
import { MapContainer, Marker,  TileLayer, } from "react-leaflet";

const Map = (props) => {
    
  return (
    <div className="m-2">
      <MapContainer
        style={{
          height: "70vh",
          width: "36vw",
          position: "relative",
          borderRadius: "0.5rem",
        }}
        center={[props.currentLat, props.currentLng]}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[-33.86543, 151.21002]}></Marker>
      </MapContainer>
    </div>
  );
};


export default Map;
