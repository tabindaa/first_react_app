import { useEffect, useState } from "react";
import { LIST_API } from "../config";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    const data = await fetch(LIST_API);
    const json = await data.json();
    setAllRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return allRestaurants;
};
export default useRestaurantList;
