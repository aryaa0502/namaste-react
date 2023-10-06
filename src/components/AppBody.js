import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import FaSpinner from "./FaSpinner";
import Shimmer from "./Shimmer";
import { PUNE_SWIGGY_HOME, PATNA_SWIGGY_HOME } from "../utils/constants";
import useAppBody from "../utils/useAppBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const AppBody = () => {
  const [
    restaurantList,
    filteredRestaurants,
    setRestaurantList,
    setFilteredRestaurants,
  ] = useAppBody();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false){
    return (
      <h1 style={{ textAlign: "center" }}>
        Looks like you are offline. Please check your internet connection!
      </h1>
    );
  }

  const filter = () => {
    const searchedRes = restaurantList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(searchedRes);
  };

  const filterOnTypingLetters = (evt) => {
    const searchedResOnTypingLetters = restaurantList.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(evt.target.value.toLowerCase());
    });
    setFilteredRestaurants(searchedResOnTypingLetters);
  };

  let debounce = function (fn, t) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, t);
    };
  };

  const debouncedFilterOnTypingLetters = debounce(filterOnTypingLetters, 1000);

  //Conditional Rendering
  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <div className="head">
        <div className="welcome-text">
          <h1>Find Best Food Near You.</h1>
        </div>
        <div className="search-bar-and-top-rated-and-see-all">
          <div className="search-bar">
            <input
              type="text"
              className="search"
              value={searchText}
              onChange={(evt) => {
                setSearchText(evt.target.value);
                debouncedFilterOnTypingLetters(evt);
              }}
              onKeyUp={(e) => {
                if (e.key == "Enter") filter();
              }}
              placeholder="Search for restaurants nearby...🔍"
            />
          </div>
          <div className="top-rated-and-see-all">
            <button
              className="top-rated-btn-see-all-btn"
              onClick={() => {
                const topRestaurantList = restaurantList.filter((res) => {
                  return res.info.avgRating > 4;
                });
                setFilteredRestaurants(topRestaurantList);
              }}
            >
              See Top Rated Restaurants
            </button>
            <button
              className="top-rated-btn-see-all-btn"
              onClick={() => {
                setFilteredRestaurants(restaurantList);
              }}
            >
              See All Restaurants
            </button>
          </div>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants?.map((res) => (
          <RestaurantCard key={res.info.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
