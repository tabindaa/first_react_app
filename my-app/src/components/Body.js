import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Carousel from "./Carousel";
import ShimmerUi from "./ShimmerUi";
import { filterRestaurants } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useIsOnline from "../utils/useIsOnline";
import useAuth from "../utils/useAuth";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const allRestaurants = useRestaurantList();
  const isOnline = useIsOnline();
  const [isLoggedIn] = useAuth();

  const handleCallback = (searchText) => {
    const filteredData = filterRestaurants(searchText, allRestaurants);
    setFilteredRestaurants(!searchText ? allRestaurants : filteredData);
  };

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  if (!allRestaurants) return null;
  console.log("allRestaurants=> ", allRestaurants);

  if (!isOnline) {
    return <div>😲 No Internet connection!</div>;
  }
  if (!isLoggedIn) {
    return <div>Please login again</div>;
  }
  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <Search onSearchClick={handleCallback}></Search>
      <Carousel></Carousel>
      <div className="restaurant-list flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <div>No Restaurant matches available!</div>
        ) : (
          filteredRestaurants.map((res) => {
            return (
              <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                <RestaurantCard res={res.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
