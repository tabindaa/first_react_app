import RestaurantCard from "./RestaurantCard";
import { LIST_API } from "./../config";
import Search from "./Search";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

function filterRestaurants(searchText, restaurantList) {
  return restaurantList.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const handleCallback = (searchText) => {
    const filteredData = filterRestaurants(searchText, allRestaurants);
    setFilteredRestaurants(!searchText ? allRestaurants : filteredData);
  };

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    const data = await fetch(LIST_API);
    const json = await data.json();
    setAllRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants.length==0) return <div>No Restaurant match available!</div>
  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <Search onSearchClick={handleCallback}></Search>
      <Carousel></Carousel>
      <div className="restaurant-list">
        {filteredRestaurants.length==0 ? <div>No Restaurant matches available!</div> : filteredRestaurants.map((res) => {
          return <RestaurantCard res={res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
