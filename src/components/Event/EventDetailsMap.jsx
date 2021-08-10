import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, { Marker } from 'react-map-gl'
import pinImage from '../../assets/goose.png'
import "./EventDetailsMap.css";

// const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
const EventDetailsMap = (props) => {
  console.log("lat", props.eventDetails._embedded.venues[0].location.latitude)
  console.log("long", props.eventDetails._embedded.venues[0].location.longitude)

  const lat = parseFloat(props.eventDetails._embedded.venues[0].location.latitude)
  const long = parseFloat(props.eventDetails._embedded.venues[0].location.longitude)
  
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long, 
    zoom: 15,
    width: "40vw",
    height: "40vh"
  });
  
    return (
      <>
        <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/wcrosby/cks530lbr9l0s17t68dk9ozze"
        onViewportChange={setViewport}
        // mapboxApiAccessToken={TOKEN}
        >
        <div className="pin" key={"test"}>
            <Link to={`/events/${"test"}`}>
              <Marker latitude={lat} longitude={long} ><img className="pin" src={pinImage} alt="pin"></img></Marker>
            </Link>
        </div>

        </ReactMapGL>
      </>
    );
  }

export default EventDetailsMap



{/* <div className="articleIcons">
    {articles.length &&
        articles.map((article, index) => (
            <div className="pin" key={article.id}>
                <Link to={`/articles/${article.id}`}>
                    <Marker latitude={parseFloat(article.latitude)} longitude={parseFloat(article.longitude)} ><img className="pin" src={article.icon}></img></Marker>
                </Link>
            </div>
        ))}
</div> */}
