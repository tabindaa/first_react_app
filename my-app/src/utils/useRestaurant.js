import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../config";

const useRestaurants = (resId) => {
  const [restaurants, setRestaurants] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const menu = await data.json();
    setRestaurants(menu.data?.cards[0]?.card?.card?.info);
    console.log(menu.data);
  }
  return restaurants;
};
export default useRestaurants;
