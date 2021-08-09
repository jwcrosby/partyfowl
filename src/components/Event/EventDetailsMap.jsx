import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

// const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
console.log(process.env)
const EventDetailsMap = (props) => {

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
        mapStyle="mapbox://styles/wcrosby/cks530lbr9l0s17t68dk9ozze"
        onViewportChange={setViewport}
        // mapboxApiAccessToken={TOKEN}
      />
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
