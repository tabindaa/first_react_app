import { useParams } from "react-router-dom";
import { IMG } from "../config";
import Shimmer from "./ShimmerUi";
import useRestaurants from "../utils/useRestaurant";
import MenuSection from "./MenuSection";

const RestaurantMenu = () => {
  const { id } = useParams();

  // const resDetails = useRestaurants(id);
  const { restaurants, details } = useRestaurants(id);
  console.log(details);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div>
      <h2>Restaurant id :{id} </h2>
      <img src={IMG + restaurants.cloudinaryImageId} alt="some img"></img>
      <p>{restaurants.name}</p>
      <p>{restaurants.city}</p>
      <p>{restaurants.avgRating}</p>
      <p>{restaurants.costForTwo / 100}</p>
      <div>
        {details.map((det, i) => {
          return (
            <MenuSection
              key={i}
              title={det.card?.card?.title}
              menuList={det.card?.card?.itemCards || []}
            ></MenuSection>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
