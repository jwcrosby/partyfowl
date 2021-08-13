import React from "react";
import { useHistory } from "react-router-dom";
import { convertSearchQueryToLatLong } from "../../services/geocodioAPI";
import { getEventsByGeoHash } from "../../services/ticketmasterAPI";
import geohash from "ngeohash"
import "./SearchHeader.css";

//Components
import Search from "./Search";

const SearchHeader = (props) => {
  const history = useHistory();
  const {
    eventData,
    setEventData,
    keyword,
    setKeyword,

    clearSearch,
    hasSearchRun,
    setHasSearchRun,

    setLatitude,
    setLongitude,
    setGeoHashLocation,
  } = props;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setHasSearchRun(true);

      convertSearchQueryToLatLong(keyword).then((data) => {

        const lat = data?.results[0]?.location?.lat;
        const long = data?.results[0]?.location?.lng;
        const geoHashConversion = geohash.encode(lat, long);
        
        setLatitude(lat)
        setLongitude(long)
        setGeoHashLocation(geoHashConversion.toString());

        getEventsByGeoHash(150, geoHashConversion).then((data) => {
          console.log(data, "Data")
          data.hasOwnProperty("_embedded")
            ? setEventData(data._embedded.events)
            : setEventData([]);
        });

      });
      

      history.push(`/events/search/${keyword}`);
      
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="hidden-container">
      <div className="header">
        <h3 className="h3-search">
          {!hasSearchRun ? "Enter Zip Code" : `Search Results: ${keyword}`}
        </h3>

        {!hasSearchRun && (
          <Search
            {...props}
            handleSearch={handleSearch}
            handleChange={handleChange}
          />
        )}

        <div className="header-buttons">
          <>
            {hasSearchRun && (
              <button onClick={clearSearch}>Clear Results</button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
