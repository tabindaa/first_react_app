import { IMG, START_ICON_SVG } from "./../config";

const RestaurantCard = ({ res }) => {
  return (
    <div className="card">
      <img alt="no text" src={IMG + res.cloudinaryImageId} />
      <h4 className="text-ellipsis">{res.name}</h4>
      {/* <img src={START_ICON_SVG} />{" "} */}
      <h4>
        {" "}
        {res.avgRating} stars * {res.sla.slaString}
      </h4>
      <div className="text-ellipsis">{res.cuisines.join(", ")}</div>
    </div>
  );
};

export default RestaurantCard;
