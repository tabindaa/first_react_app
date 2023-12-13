import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./../config";
import Search from "./Search";
import Carousel from "./Carousel";
import { useState } from "react";
function filterRestaurants(searchText, restaurantList) {
  return restaurantList.filter((res) => res.info.name.includes(searchText));
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const handleCallback = (searchText) => {
    const filteredData = filterRestaurants(searchText, restaurants);
    setRestaurants(filteredData);
  };
  return (
    <>
      <Search onSearchClick={handleCallback}></Search>
      <Carousel></Carousel>
      <div className="restaurant-list">
        {restaurants.map((res) => {
          return <RestaurantCard res={res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
