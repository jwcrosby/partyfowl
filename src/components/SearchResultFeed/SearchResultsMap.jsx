import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import pinImage from "../../assets/icons/drinkpin.png";
import "./SearchResultsMap.css";


const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SearchResultsMap = ({ eventData, latitude, longitude }) => {
console.log(latitude, longitude)

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 11.75,
  });


  return (
    <div style={{ height: "70vh", width: "98vw" }} className="map">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/wcrosby/cks530lbr9l0s17t68dk9ozze"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
        width="100%"
        height="100%"
      >
        {eventData.map((event, index) => (
          <div className="pin" key={index}>
            <Link to={`/events/${event.id}`}>
              <Marker
                latitude={parseFloat(
                  event._embedded?.venues[0]?.location?.latitude
                )}
                longitude={parseFloat(
                  event._embedded?.venues[0]?.location?.longitude
                )}
              >
                <img className="pin" src={pinImage} alt="pin"></img>
              </Marker>
            </Link>
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default SearchResultsMap;
