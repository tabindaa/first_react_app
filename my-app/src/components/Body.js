import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Carousel from "./Carousel";
import ShimmerUi from "./ShimmerUi";
import { filterRestaurants } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const allRestaurants = useRestaurantList();

  const handleCallback = (searchText) => {
    const filteredData = filterRestaurants(searchText, allRestaurants);
    setFilteredRestaurants(!searchText ? allRestaurants : filteredData);
  };

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  if (!allRestaurants) return null;
  console.log("allRestaurants=> ", allRestaurants);

  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <Search onSearchClick={handleCallback}></Search>
      <Carousel></Carousel>
      <div className="restaurant-list">
        {filteredRestaurants.length == 0 ? (
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
