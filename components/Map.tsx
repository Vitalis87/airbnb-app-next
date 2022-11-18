import React, { FC } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
import { SearchResultsData } from "../types";

interface MapProps {
  searchResults: SearchResultsData[];
}

const Map: FC<MapProps> = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));


  const center = getCenter(coordinates);
  
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/hope87/clamgqpkw000y14rocdkrm1me"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{width: '100vw', height: '100vh'}}
    />
  );
};

export default Map;
