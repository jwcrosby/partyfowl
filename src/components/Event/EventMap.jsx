import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

// Needs to be converted to a service and then a controller
const TOKEN = 'pk.eyJ1Ijoid2Nyb3NieSIsImEiOiJja3M0dnQwa2swYm8yMm9teHJqdDg2ZWtnIn0.q0ntESOC-EdJb2PwMLn5vQ'

const EventMap = (props) => {

    const [viewport, setViewport] = useState({
      latitude: 37.8,
      longitude: -122.4, 
      zoom: 3,
      width: "30vw",
      height: "30vh"
    });
  
    return (
        <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      />
    );
  }

export default EventMap



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
