import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length != 0 && (
        <button className="bg-green-100" onClick={handleClearCart}>Clear cart</button>
      )}
      {cartItems.map((items) => {
        return (
          <div key={items.id} className="flex justify-between border">
            <Link className="block m-2">{items.name}</Link>
            <span>{items.description}</span>
            <span>{items.price / 100}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
