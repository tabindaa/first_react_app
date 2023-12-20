import Title from "./../components/Title";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import useAuth from "../utils/useAuth";

const HeaderComponent = () => {
  const isOnline = useIsOnline();
  const [isLoggedIn, setLoggedIn] = useAuth();
  const toggleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">🏘 Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">✍ Contact</Link>
          </li>
          <li>
            <Link to="/signin">👨‍🍳 Sign In</Link>
          </li>
          <li>
            <Link to="/cart">🛍 Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? "✔" : "☹"}
      {isLoggedIn ? (
        <button onClick={toggleLogin}>Logout</button>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
