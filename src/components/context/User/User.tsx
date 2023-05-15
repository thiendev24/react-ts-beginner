import { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "John Doe",
      email: "upchh@example.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button type="button" onClick={() => handleLogin()}></button>
      <button type="button" onClick={() => handleLogout()}></button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};

export default User;
