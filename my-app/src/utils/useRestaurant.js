import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../config";

const useRestaurants = (resId) => {
  const [restaurants, setRestaurants] = useState(null);
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const menu = await data.json();
    setRestaurants(menu.data?.cards[0]?.card?.card?.info);
    const details = menu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    setRestaurantDetails(details);
  }
  // return restaurants; //, details: menu.data?.cards[2]};
  return { restaurants: restaurants, details: restaurantDetails };
};
export default useRestaurants;
