import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoid2Nyb3NieSIsImEiOiJja3M0dnQwa2swYm8yMm9teHJqdDg2ZWtnIn0.q0ntESOC-EdJb2PwMLn5vQ'; // Set your mapbox token here

const EventMap = (props) => {

  function Map() {
    const [viewport, setViewport] = useState({
      latitude: 37.8,
      longitude: -122.4,
      zoom: 14,
      bearing: 0,
      pitch: 0
    });
  
    return (
      <MapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    );
  }

}

export default EventMap