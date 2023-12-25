import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedInn] = useState(true);
  function setIsLoggedIn(loggedInStatus) {
    setIsLoggedInn(loggedInStatus);
  }
  return [isLoggedIn, setIsLoggedIn];
};
export default useAuth;
