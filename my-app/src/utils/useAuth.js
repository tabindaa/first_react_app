import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedInn] = useState(false);
  function setIsLoggedIn(loggedInStatus) {
    setIsLoggedInn(loggedInStatus);
  }
  return [isLoggedIn, setIsLoggedIn];
};
export default useAuth;
