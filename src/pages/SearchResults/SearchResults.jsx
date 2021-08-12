import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";
import styles from "./SearchResults.module.css";
import SearchResultsMap from "../../components/SearchResultFeed/SearchResultsMap";

//Services
import { convertSearchQueryToLatLong } from "../../services/geocodioAPI";
import { getEventsByPostalCode } from "../../services/ticketmasterAPI";

const SearchResults = ({ user }) => {
  const [eventData, setEventData] = useState([]);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [geoHashLocation, setGeoHashLocation] = useState("");

  useEffect(() => {
    //Convert incoming search quety to lat/long
    convertSearchQueryToLatLong("80202").then((data) => {

      const lat = data?.results[0]?.location?.lat;
      const long = data?.results[0]?.location?.lng;
      
      var geohash = require("ngeohash");
      const geoHashConversion = geohash.encode(lat, long);

      setLatitude(lat.toString())
      setLongitude(long.toString())
      setGeoHashLocation(geoHashConversion.toString())

      console.log(latitude, "latitude")
      console.log(longitude, "longitude")
      console.log(geoHashLocation, "geoHashLocation")

      getEventsByPostalCode(100, geoHashLocation).then((data) => {

        data.hasOwnProperty("_embedded")
          ? setEventData(data._embedded.events)
          : setEventData([]);
      });
    });
  }, []);

  return (
    <main className={styles.container}>
      <div>
        <h1 className="landing-h1">Search Results</h1>

        <SearchResultsMap eventData={eventData} geoHashgeoHashLocation={geoHashLocation} />
      </div>
    </main>
  );
};

export default SearchResults;
