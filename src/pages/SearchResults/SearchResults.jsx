import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";
import styles from "./SearchResults.module.css";
import SearchResultsMap from "../../components/SearchResultFeed/SearchResultsMap";
import geohash from "ngeohash"

//Services
import { convertSearchQueryToLatLong } from "../../services/geocodioAPI";
import { getEventsByGeoHash } from "../../services/ticketmasterAPI";

const SearchResults = ({ user }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [geoHashLocation, setGeoHashLocation] = useState();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    //Convert incoming search quety to lat/long
    convertSearchQueryToLatLong("Austin, TX").then((data) => {

      const lat = data?.results[0]?.location?.lat;
      const long = data?.results[0]?.location?.lng;

      const geoHashConversion = geohash.encode(lat, long);

      setLatitude(lat);
      setLongitude(long);
      setGeoHashLocation(geoHashConversion.toString());

    });
  }, []);
  
  useEffect(() => {
    getEventsByGeoHash(100, geoHashLocation).then((data) => {
        data.hasOwnProperty("_embedded")
          ? setEventData(data._embedded.events)
          : setEventData([]);
      });
  }, [geoHashLocation]);

  return (
    <main className={styles.container}>
      <div>
        <h1 className="landing-h1">Search Results</h1>

        {latitude && longitude && geoHashLocation && 

        <SearchResultsMap
          eventData={eventData}
          latitude={latitude}
          longitude={longitude}
        />
          }
      </div>
    </main>
  );
};

export default SearchResults;
