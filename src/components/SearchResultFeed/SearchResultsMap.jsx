import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, { Marker } from 'react-map-gl'
import pinImage from '../../assets/goose.png'
import "./SearchResultsMap.css";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const SearchResultsMap = ({eventData}) => {
  // console.log("lat", props.eventDetails._embedded.venues[0].location.latitude)
  // console.log("long", props.eventDetails._embedded.venues[0].location.longitude)

  // const lat = parseFloat(props.eventDetails._embedded.venues[0].location.latitude)
  // const long = parseFloat(props.eventDetails._embedded.venues[0].location.longitude)
  
  const [viewport, setViewport] = useState({
    latitude: 39.7392,
    longitude: -104.9903, 
    zoom: 12,
    width: "98vw",
    height: "70vh"
  });

  const test = eventData
  console.log(test)
  
    return (
      <>
        <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/wcrosby/cks530lbr9l0s17t68dk9ozze"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
        >
          


        {/* {eventData._embedded.events.map((event) => (

          
          <div className="pin" key={"test"}>
              <Link to={`/events/${"test"}`}>
                <Marker latitude={39.7392} longitude={-104.9903} ><img className="pin" src={pinImage} alt="pin"></img></Marker>
              </Link>
          </div> 
      
        ))} */}


        </ReactMapGL>
      </>
    );
  }

export default SearchResultsMap
