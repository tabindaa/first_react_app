import Title from "./../components/Title";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const toggleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={toggleLogin}>Logout</button>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
