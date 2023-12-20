import { useParams } from "react-router-dom";
import { IMG } from "../config";
import Shimmer from "./ShimmerUi";
import useRestaurants from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resDetails = useRestaurants(id);

  return !resDetails ? (
    <Shimmer />
  ) : (
    <div>
      <h2>Restaurant id :{id} </h2>
      <img src={IMG + resDetails.cloudinaryImageId}></img>
      <p>{resDetails.name}</p>
      <p>{resDetails.city}</p>
      <p>{resDetails.avgRating}</p>
      <p>{resDetails.costForTwo / 100}</p>
    </div>
  );
};
export default RestaurantMenu;
