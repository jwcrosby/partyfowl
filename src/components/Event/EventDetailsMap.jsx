import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ReactMapGL, { Marker } from 'react-map-gl'
import pinImage from '../../assets/goose.png'
import "./EventDetailsMap.css";

// const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
const EventDetailsMap = (props) => {

    const [viewport, setViewport] = useState({
      latitude: 37.8,
      longitude: -122.4, 
      zoom: 15,
      width: "40vw",
      height: "40vh"
    });

    console.log(props)
  
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
              <Marker latitude={parseFloat(37.8)} longitude={parseFloat(-122.4)} ><img className="pin" src={pinImage} alt="pin"></img></Marker>
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
