import Title from "./../components/Title";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import useAuth from "../utils/useAuth";
import Search from "./Search";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../utils/cartSlice";

const HeaderComponent = () => {
  const { user } = useContext(UserContext);
  const isOnline = useIsOnline();
  const [isLoggedIn, setLoggedIn] = useAuth();
  const toggleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  const handleCallback = () => {};
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-xl my-2">
      <Title />
      <Search onSearchClick={handleCallback}></Search>
      <div className="nav-items">
        <ul className="flex p-2">
          <li className="px-2">
            <Link to="/">🏘 Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">✍ Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/signin">👨‍🍳 Sign In</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">🛍 Cart {cartItems.length}</Link>
            {cartItems.length!=0 && <span onClick={handleClearCart}>❌</span>}
          </li>
        </ul>
      </div>
      <span className="m-2 p-10">{isOnline ? "✔" : "☹"}</span>
      <span className="m-2 p-10">👩{user.name}</span>
      {isLoggedIn ? (
        <button onClick={toggleLogin}>Logout</button>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
