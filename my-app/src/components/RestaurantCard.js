import { IMG } from "./../config";

const RestaurantCard = ({ res }) => {
  return (
    <div className="w-[200px] shadow-2xl m-1 p-2">
      <img
        alt="no text"
        src={IMG + res.cloudinaryImageId}
        className="rounded-md"
      />
      <div className="text-ellipsis overflow-hidden font-bold text-2xl">
        {res.name}
      </div>
      {/* <img src={START_ICON_SVG} />{" "} */}
      <div>
        {" "}
        {res.avgRating} stars * {res.sla.slaString}
      </div>
      <div className="truncate">{res.cuisines.join(", ")}</div>
    </div>
  );
};

export default RestaurantCard;
