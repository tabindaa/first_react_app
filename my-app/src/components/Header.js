import Title from "./../components/Title";
import { useState } from "react";

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
          <li key="Home">Home</li>
          <li key="About">About</li>
          <li key="Contact">Contact</li>
          <li key="Cart">Cart</li>
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
