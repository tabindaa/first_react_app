import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { MENU_IMG } from "../config";

const MenuSection = ({ title, menuList }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="border border-black m-2 p-2 bg-pink-100">
      <span className="font-bold block">{title}</span>
      <div>
        {menuList.map((menu, i) => {
          return (
            <div
              key={menu?.card?.info?.id}
              className="flex flex-row border m-1 container"
            >
              <div className="m-1 flex-1">
                <span className="block">{menu?.card?.info?.name}</span>
                <span className="block text-gray-400">
                  {menu?.card?.info?.description}
                </span>
              </div>
              <div className="flex-1">
                <img src={MENU_IMG + menu?.card?.info?.imageId} />
                <button
                  className=""
                  onClick={() => {
                    handleAddItem(menu?.card?.info);
                  }}
                >
                  ➕
                </button>
                <button
                  className=""
                  onClick={() => {
                    handleRemoveItem(menu?.card?.info);
                  }}
                >
                  ➖
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuSection;
