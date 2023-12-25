import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "User 1",
    location: "Melbourne",
  },
});
export default UserContext;
